import { ErrorHandler } from "../../helpers/error.helper";
import { prisma } from "../../app";

export const getProjectByIdService = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found.");
  }

  return project;
};
