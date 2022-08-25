import { prisma } from "../../app";

interface Iproject {
  projects: [];
}
export const addProjectService = async (project: Iproject) => {
  const projectCreate = await prisma.project.createMany({
    data: project.projects,
    skipDuplicates: true,
  });

  return projectCreate;
};
