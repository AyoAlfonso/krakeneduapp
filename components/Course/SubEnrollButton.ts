import h from "react-hyperscript";
import { useUserData } from "src/data";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApi } from "src/apiHelpers";
import { EnrollMsg, EnrollResponse } from "pages/api/cohorts/[cohortId]/enroll";
import { getDiscounts, setDiscounts } from "src/clientData";
import { Box } from "components/Layout";
import { Modal } from "components/Modal";
import { Primary } from "components/Button";
import compress from "src/paystack/compress-data";
import { errorNotify, successNotify } from "src/utils";

const defaultConfig = {
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
};

 const onSuccess = () => {
  successNotify("Your payment was successful!");
};

 const onClose = () => {
  errorNotify("Your payment failed, try again?");
};

const paystackHook = (config: {}) => {
  try {
    let initializePayment = compress(config, defaultConfig);
    // @ts-ignore
    initializePayment(onSuccess, onClose)();
  } catch (error) {
    console.log(error);
  }
};

export const SubEnrollButton: React.FC<{
  id: number;
  course: number;
  max_size: number;
  learners: number;
  invited: boolean;
}> = (props) => {
  let { data: user } = useUserData();
  let router = useRouter();
  let [error, setError] = useState(false);
  let [status, callEnroll] = useApi<EnrollMsg, EnrollResponse>(
    [],
    async (res) => {
      if (res.zeroCost)
        await router.push(
          "/courses/[slug]/[id]/cohorts/[cohortId]",
          `/courses/${router.query.slug}/${props.course}/cohorts/${props.id}?welcome`
        );
      paystackHook(res);
    }
  );

  let onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (user === false)
      await router.push("/login?redirect=" + encodeURIComponent(router.asPath));
    if (!props.id) return;
    let discount = getDiscounts().find((d) => d.course === props.course);
    let res = await callEnroll(`/api/cohorts/${props.id}/enroll`, {
      discount: discount?.code,
      paystack: true,
    });

    if (res.status === 403) {
      setError(true);
      setDiscounts(
        getDiscounts().filter(
          (d) => res.status === 403 && d.code !== res.result.discount
        )
      );
    }
  };

  return h(Box, { gap: 4, style: { alignItems: "center" } }, [
    h(Modal, { display: error }, [
      h("h3", "Sorry, the discount code you're using is no longer valid"),
    ]),
    h(
      Primary,
      {
        onClick,
        status,
        disabled:
          !props.invited ||
          (props.max_size !== 0 && props.max_size === props.learners),
      },
      props.children as React.ReactElement
    ),
  ]);
};
