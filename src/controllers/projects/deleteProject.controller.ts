import { Request, Response } from "express";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { deleteProjectService } from "../../services/projects/deleteProject.service";

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.decoded;

    const data = await deleteProjectService(id, email);

    return res.status(204).json({ message: data });
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
