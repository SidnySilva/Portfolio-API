import { Request, Response, NextFunction } from "express";
import { ErrorHandler, handleError } from "../helpers/error.helper";
import { getProjectService } from "../services/getProject.service";

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const { email } = req.decoded;

    const data = await getProjectService(email);

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
