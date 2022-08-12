import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";

interface IBody {
  name?: string;
  description?: string;
  date?: string;
  linkFront?: string;
  linkBack?: string;
}
export const updateProjectService = async (id: string, body: IBody) => {
  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found.");
  }
  const projectUpdate = await prisma.project.update({
    where: { project_id: id },
    data: {
      name: body.name === "" ? project?.name : body.name,
      description:
        body.description === "" ? project?.description : body.description,
      date: body.date === "" ? project?.date : body.date,
      linkFront: body.linkFront === "" ? project?.linkFront : body.linkFront,
      linkBack: body.linkBack === "" ? project?.linkBack : body.linkBack,
    },
  });

  return projectUpdate;
};
