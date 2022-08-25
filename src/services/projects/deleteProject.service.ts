import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";

export const deleteProjectService = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found");
  }

  await prisma.project.delete({ where: { project_id: id } });

  return;
};
