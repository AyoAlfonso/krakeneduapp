import * as t from "runtypes";
import {
  getUsername,
  createGroup,
  createCategory,
  updateTopic,
} from "../../../src/discourse";
import TemplateCourseDescription from "../../../writing/TemplateCourseDescription.txt";
import TemplateClubDescription from "../../../writing/TemplateClubDescription.txt";
import { getToken } from "../../../src/token";
import { ResultType, Request, APIHandler } from "../../../src/apiHelpers";
import TemplateCohortGettingStarted from "writing/TemplateCohortGettingStarted.txt";
import TemplateCohortNotes from "writing/TemplateCohortNotes.txt";
import TemplateCohortArtifact from "writing/TemplateCohortArtifact.txt";
import TemplateCohortAssignment from "writing/TemplateCohortAssignment.txt";
import TemplateCohortEvent from "writing/TemplateCohortEvent.txt";
import TemplateCohortPrompt from "writing/TemplateCohortPrompt.txt";
import TemplateCohortRetrospective from "writing/TemplateCohortRetrospective.txt";
import { slugify } from "src/utils";

import prisma from "lib/prisma";

export type CourseResult = ResultType<typeof getCourses>;
export type CreateCourseMsg = t.Static<typeof CreateCourseMsgValidator>;
const CreateCourseMsgValidator = t.Record({
  type: t.Union(t.Literal("club"), t.Literal("course"), t.Undefined),
  description: t.String,
  name: t.String,
  cost: t.Number,
  duration: t.String,
  prerequisites: t.String,
  maintainers: t.Array(t.String),
});

export type CreateCourseResponse = ResultType<typeof createCourse>;

export default APIHandler({ POST: createCourse, GET: getCourses });

export const coursesQuery = (options?: Partial<{ type: "course" | "club" }>) =>
  prisma.courses.findMany({
    where: { status: "live", type: options?.type || undefined },
    include: {
      course_cohorts: {
        where: {
          AND: [
            { live: true },
            { start_date: { gt: new Date().toISOString() } },
          ],
        },
        select: {
          name: true,
          start_date: true,
          id: true,
          people_in_cohorts: { select: { cohort: true } },
        },
        orderBy: { start_date: "desc" },
      },
    },
  });

async function getCourses(req: Request) {
  let courses = await coursesQuery(req.query);
  return { status: 200, result: { courses } } as const;
}

async function createCourse(req: Request) {
  let msg;
  try {
    msg = CreateCourseMsgValidator.check(req.body);
  } catch (e) {
    return { status: 400, result: e.toString() } as const;
  }

  let user = getToken(req);
  if (!user) return { status: 403, result: "No user logged in" } as const;

  let isAdmin = await prisma.admins.findUnique({ where: { person: user.id } });
  if (!isAdmin) return { status: 403, result: "User is not an admin" } as const;

  let maintainers = await prisma.people.findMany({
    where: { email: { in: msg.maintainers, mode: "insensitive" } },
    select: { username: true, id: true },
  });

  let slug = slugify(msg.name);
  if (maintainers.length === 0)
    return {
      status: 400,
      result: "No maintainers provided, or found with the emails provided",
    } as const;

  let maintainerGroupName = slug + "-m";
  let maintainerGroup;
  let courseGroup;
  [maintainerGroup, courseGroup] = await Promise.all([
    createGroup({
      name: maintainerGroupName,
      visibility_level: 2,
      owner_usernames: maintainers.map((m) => m.username),
      messageable_level: 3,
      mentionable_level: 99,
    }),
    createGroup({
      name: slug,
      visibility_level: 2,
      owner_usernames: maintainers.map((m) => m.username),
      messageable_level: 3,
      mentionable_level: 3,
    }),
  ]);

  console.log(courseGroup, maintainerGroup);
  if (!courseGroup.basic_group.id || !maintainerGroup.basic_group.id) {
    if (maintainerGroup.status !== 200 || courseGroup.status !== 200)
      return {
        status: 500,
        result: maintainerGroup.result || courseGroup.result,
      } as const;

    // if (!maintainerGroup || !courseGroup)
    //   return {
    //     status: 500,
    //     result: "Couldn't create course maintainers group",
    //   } as const;
  }

  let category = await createCategory(msg.name, {
    slug,
    permissions: { [maintainerGroupName]: 1 },
    show_subcategory_list: true,
    subcategory_list_style: "rows_with_featured_topics",
    default_list_filter: "none",
  });
  if (!category)
    return {
      status: 500,
      result: "Couldn't create course category",
    };

  await updateTopic(
    category.topic_url,
    {
      category_id: category.id,
      title: `${msg.name} ${msg.type === "club" ? "Details" : "Curriculum"}`,
      tags: ["curriculum"],
      raw:
        msg.type === "club"
          ? TemplateClubDescription
          : TemplateCourseDescription,
    },
    await getUsername(maintainers[0].id)
  );

  await prisma.courses.create({
    data: {
      maintainer_groupTodiscourse_groups: {
        create: {
          id: maintainerGroup.basic_group.id,
          name: maintainerGroupName,
        },
      },
      course_groupTodiscourse_groups: {
        create: {
          id: courseGroup.basic_group.id,
          name: slug,
        },
      },
      category_id: category.id,
      slug: slugify(msg.name),
      name: msg.name,
      status: msg.type === "club" ? "live" : "draft",
      card_image:
        msg.type === "club"
          ? "https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png,https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png,https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png"
          : undefined,
      description: msg.description,
      duration: msg.duration,
      prerequisites: msg.prerequisites,
      cost: msg.cost,
      type: msg.type,
      course_maintainers: {
        create: msg.maintainers.map((email) => {
          return {
            people: {
              connect: { email },
            },
          };
        }),
      },
      course_templates: {
        create: [
          {
            content: TemplateCohortGettingStarted,
            name: "Getting Started",
            title: "Getting Started",
            type: "prepopulated",
            required: true,
          },
          {
            content: TemplateCohortNotes,
            name: "Notes",
            title: "Notes",
            type: "prepopulated",
            required: true,
          },
          {
            content: TemplateCohortArtifact,
            name: "Artifact",
            title: "Artifact",
            type: "triggered",
            required: true,
          },
          {
            content: TemplateCohortAssignment,
            name: "Assignment",
            title: "Assignment",
            type: "triggered",
            required: false,
          },
          {
            content: TemplateCohortEvent,
            name: "Event",
            title: "Event",
            type: "triggered",
            required: false,
          },
          {
            content: TemplateCohortPrompt,
            name: "Prompt",
            title: "Prompt",
            type: "triggered",
            required: false,
          },
          {
            content: TemplateCohortRetrospective,
            name: "Retrospective",
            title: "Retrospective",
            type: "triggered",
            required: false,
          },
        ],
      },
    },
  });
  return { status: 200, result: "Course created" };
}
