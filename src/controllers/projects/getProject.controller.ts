import { Request, Response } from "express";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { getProjectService } from "../../services/projects/getProject.service";

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const data = await getProjectService();

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
