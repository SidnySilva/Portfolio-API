import { Request, Response, NextFunction } from "express";
import { ErrorHandler, handleError } from "../helpers/error.helper";
import { getProjectByIdService } from "../services/getProjectById.service";

export const getProjectByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { email } = req.decoded;

    const data = await getProjectByIdService(id, email);

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
