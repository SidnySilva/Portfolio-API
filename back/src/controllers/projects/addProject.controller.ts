import { Request, Response } from "express";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { addProjectService } from "../../services/projects/addProject.service";

export const addProjectController = async (req: Request, res: Response) => {
  try {
    const { email } = req.decoded;

    const data = await addProjectService(req.body, email);

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
