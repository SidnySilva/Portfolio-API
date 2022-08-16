import { ErrorHandler } from "../../helpers/error.helper";
import { prisma } from "../../app";

export const getProjectByIdService = async (id: string, userEmail: string) => {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { projects: true },
  });

  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found.");
  }

  if (user.user_id !== project.userUser_id) {
    throw new ErrorHandler(401, "Unauthorized. Maybe this isn't your project.");
  }
  const { nickname, email } = user;

  const newUser = {
    nickname: nickname,
    email: email,
    project: project,
  };

  return newUser;
};
