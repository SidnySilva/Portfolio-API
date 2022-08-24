import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import {
  regexLink,
  verifyBackLinks,
  verifyFrontLinks,
} from "../../utils/regex";

interface IBody {
  imageLink: string;
  name: string;
  type: string;
  description: string;
  date: string;
  links: string;
  engines: string;
}
export const updateProjectService = async (id: string, body: IBody) => {
  const project = await prisma.project.findUnique({
    where: { project_id: id },
  });

  if (!project) {
    throw new ErrorHandler(400, "Project not found.");
  }

  verifyFrontLinks(body.links);

  const projectUpdate = await prisma.project.update({
    where: { project_id: id },
    data: {
      imageLink: body.imageLink === "" ? project?.imageLink : body.imageLink,
      name: body.name === "" ? project?.name : body.name,
      type: body.type === "" ? project?.type : body.type,
      description:
        body.description === "" ? project?.description : body.description,
      date: body.date === "" ? project?.date : body.date,
      links: body.links === "" ? project?.links : body.links,
      engines: body.engines === "" ? project?.engines : body.engines,
    },
  });

  return projectUpdate;
};
