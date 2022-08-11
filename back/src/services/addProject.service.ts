import { Request, Response, NextFunction } from "express";
import { ErrorHandler, handleError } from "../helpers/error.helper";
import { prisma } from "../app";

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
  if (!project.name) {
    throw new ErrorHandler(400, "Missing project's name");
  }

  if (!project.description) {
    throw new ErrorHandler(400, "Missing project's description");
  }

  if (!project.date) {
    throw new ErrorHandler(400, "Missing project's creation date");
  }

  if (!project.linkFront && !project.linkBack) {
    throw new ErrorHandler(
      400,
      "Missing project's links, at least one is needed",
    );
  }

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