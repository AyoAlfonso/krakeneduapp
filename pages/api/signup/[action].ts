import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import hmac from "../../../src/hmac";
import { setTokenHeader } from "../../../src/token";
import {
  multiRouteHandler,
  ResultType,
  Request,
} from "../../../src/apiHelpers";
import { syncSSO } from "../../../src/discourse";
import { sendVerificationEmail } from "../../../emails";
import { usernameValidate } from "src/utils";
import prisma from "lib/prisma";
// import * as axios from "axios";
import querystring from "querystring";

export type SignupMsg = {
  email: string;
  username: string;
  password: string;
  newsletter: boolean;
};

export type VerifyEmailMsg = {
  key: string;
};

export type NewsletterSignupMsg = { email: string };

export type SignupResponse = ResultType<typeof Signup>;
export type VerifyEmailResponse = ResultType<typeof VerifyEmail>;
export type NewsletterSignupResponse = ResultType<typeof newsletterSignup>;

export default multiRouteHandler("action", {
  request: Signup,
  verify: VerifyEmail,
  newsletter: newsletterSignup,
});

async function Signup(req: Request) {
  let msg: Partial<SignupMsg> = req.body;
  if (
    !msg.email ||
    !msg.password ||
    !msg.username ||
    msg.newsletter === undefined
  ) {
    return {
      status: 400,
      result:
        "Error: invalid message, missing email, password, newsletter, or display_name",
    } as const;
  }
  if (!usernameValidate(msg.username))
    return {
      status: 400,
      result:
        "Error: Username must be between 3 and 15 characters, and contain only numbers, letters, dots, dashes, and underscores",
    };

  if (!(await checkUser(msg.email))) {
    return {
      status: 401,
      result: "Error: A user exists with that email",
    } as const;
  }

  let salt = await bcrypt.genSalt();
  let password_hash = await bcrypt.hash(msg.password, salt);

  let key = await createActivationKey({
    email: msg.email.toLowerCase(),
    username: msg.username,
    password_hash,
    newsletter: msg.newsletter,
  });

  let origin = new URL(req.headers.referer || "").origin;
  let activation_url = `${origin}/signup?verifyEmail=${key}`;
  // TODO:
  await sendVerificationEmail(msg.email, {
    activation_code: key,
    name: msg.username,
    activation_url,
  });
  return { status: 200, result: "" } as const;
}

async function VerifyEmail(req: Request) {
  let msg: Partial<VerifyEmailMsg> = req.body;
  if (!msg.key)
    return {
      status: 400,
      result: "Error: invalid message, missing property key",
    } as const;

  let keyHash = hmac(msg.key);
  let token = await getActivationKey(keyHash);
  if (!token) return { status: 403, result: "Error: invalid activation_key" };

  let date = new Date(token.created_time);

  if ((Date.now() - date.getTime()) / (1000 * 60) > 30) {
    return { status: 403, result: "Error: activation_key is out of date" };
  }

  let id = await createUser({
    username: token.username,
    email: token.email,
    password_hash: token.password_hash,
  });

  // We used token.newsletter before
  if (id) {
    // let sendyHeaders = new Headers();
    // sendyHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // console.log(
    //   "SENDY_LIST_DEVS_REL_ID",
    //   process.env.NEXT_PUBLIC_SENDY_LIST_DEVS_REL_ID
    // );
    // let urlencoded = new URLSearchParams();
    // urlencoded.append("list", process.env.NEXT_PUBLIC_SENDY_LIST_DEVS_REL_ID);
    // urlencoded.append("api_key", process.env.NEXT_PUBLIC_SENDY_API_KEY);
    // urlencoded.append("email", token.email);
    // urlencoded.append("silent", true);

    // let requestOptions = {
    //   method: "POST",
    //   headers: sendyHeaders,
    //   body: urlencoded,
    //   redirect: "follow",
    // };

    // fetchWithBackoff("sendy.krakenedu.com/subscribe", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    var data = querystring.stringify({
      list: process.env.NEXT_PUBLIC_SENDY_LIST_DEVS_REL_ID,
      api_key: process.env.NEXT_PUBLIC_SENDY_API_KEY,
      email: token.email,
    });
    var config = {
      method: "post",
      url: "http://sendy.krakenedu.com/subscribe",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

  let result = await fetch("http://sendy.krakenedu.com/subscribe", config);
  console.log(result, "result")
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log("hereee")
    //     console.log(error);
    //   });
  }

  if (!id)
    return {
      status: 403,
      result: "Error: Couldn't create user. May already exist",
    };

  const newDiscourseUser = await syncSSO({
    external_id: id,
    username: token.username,
    email: token.email,
  });

  console.log(newDiscourseUser, "newDiscourseUser");

  return {
    status: 200,
    result: "",
    headers: setTokenHeader({
      id,
      email: token.email,
      username: token.username,
    }),
  } as const;
}

const createActivationKey = async (person: {
  email: string;
  password_hash: string;
  username: string;
  newsletter: boolean;
}) => {
  let key = uuidv4();
  await prisma.activation_keys.create({
    data: {
      ...person,
      created_time: new Date(Date.now()).toISOString(),
      key_hash: hmac(key),
    },
  });
  return key;
};

const checkUser = async (email: string): Promise<boolean> => {
  return !(await prisma.people.findFirst({
    where: { email: { equals: email, mode: "insensitive" } },
  }));
};

const createUser = async (input: {
  email: string;
  password_hash: string;
  username: string;
}) => {
  let previousEvents = await prisma.no_account_rsvps.findMany({
    where: { email: { equals: input.email, mode: "insensitive" } },
  });
  let user;
  try {
    [user] = await Promise.all([
      prisma.people.create({
        data: {
          ...input,
          id: uuidv4(),
          people_in_events: {
            create: previousEvents.map((ev) => {
              return {
                events: { connect: { id: ev.event } },
              };
            }),
          },
        },
      }),
      prisma.activation_keys.deleteMany({ where: { email: input.email } }),
      previousEvents.length > 0
        ? prisma.no_account_rsvps.deleteMany({
            where: { email: { equals: input.email, mode: "insensitive" } },
          })
        : undefined,
    ]);
  } catch (e) {
    console.log(e);
    return false;
  }
  return user.id;
};

const getActivationKey = async (hash: string) => {
  return prisma.activation_keys.findUnique({
    where: { key_hash: hash },
    select: {
      username: true,
      email: true,
      password_hash: true,
      created_time: true,
      newsletter: true,
    },
  });
};

async function newsletterSignup(req: Request) {
  let msg = req.body as Partial<NewsletterSignupMsg>;
  if (!msg.email)
    return { status: 400, result: "ERROR: no email provided" } as const;

  await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: msg.email,
      tags: ["homepage"],
    }),
  });
  return { status: 200, result: "Signed up for newsletter" };
}
