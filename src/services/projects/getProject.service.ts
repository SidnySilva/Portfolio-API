import { prisma } from "../../app";

export const getProjectService = async () => {
  const projects = await prisma.project.findMany();

  return projects;
};
