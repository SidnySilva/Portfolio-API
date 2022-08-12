import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";

export const deleteProjectService = async (id: string, userEmail: string) => {
  const user = await prisma.user.findUnique({ where: { email: userEmail } });

  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found");
  }
  if (user.user_id !== project.userUser_id) {
    throw new ErrorHandler(401, "Unauthorized. Maybe this isn't your project.");
  }

  await prisma.project.delete({ where: { project_id: id } });

  return;
};
