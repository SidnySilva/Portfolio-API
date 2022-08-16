import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import {
  regexDate,
  verifyBackLinks,
  verifyFrontLinks,
} from "../../utils/regex";

interface Iproject {
  name: string;
  description: string;
  date: string;
  linkFront: string;
  linkBack: string;
}
export const addProjectService = async (
  project: Iproject,
  userEmail: string,
) => {
  if (!project.linkFront && !project.linkBack) {
    throw new ErrorHandler(
      400,
      "Missing project's links, at least one is needed",
    );
  }

  if (!project.date.match(regexDate)) {
    throw new ErrorHandler(400, `Date format DD/MM/YYYY`);
  }

  verifyFrontLinks(project.linkFront);
  verifyBackLinks(project.linkBack);

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  const projectCreate = await prisma.project.create({
    data: {
      name: project.name,
      description: project.description,
      date: project.date,
      linkFront: project.linkFront,
      linkBack: project.linkBack,
      userUser_id: user?.user_id,
    },
  });

  return projectCreate;
};
