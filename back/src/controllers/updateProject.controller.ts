import { Request, Response, NextFunction } from "express";
import { ErrorHandler, handleError } from "../helpers/error.helper";
import { updateProjectService } from "../services/updateProject.service";

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateProjectService(id, body);

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
