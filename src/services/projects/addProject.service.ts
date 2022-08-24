import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import { regexDate, verifyFrontLinks } from "../../utils/regex";

interface Iproject {
  imageLink: string;
  name: string;
  type: string;
  description: string;
  date: string;
  links: string;
  engines: string;
}
export const addProjectService = async (
  project: Iproject,
  userEmail: string,
) => {
  if (project.links.length === 0) {
    throw new ErrorHandler(
      400,
      "Missing project's links, at least one is needed",
    );
  }

  if (!project.date.match(regexDate)) {
    throw new ErrorHandler(400, `Date format DD/MM/YYYY`);
  }

  verifyFrontLinks(project.links);

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  const projectCreate = await prisma.project.create({
    data: {
      imageLink: project.imageLink,
      name: project.name,
      type: project.type,
      description: project.description,
      date: project.date,
      links: project.links,
      engines: project.engines,
      userUser_id: user?.user_id,
    },
  });

  return projectCreate;
};
