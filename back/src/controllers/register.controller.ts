import { Request, Response } from "express";
import { ErrorHandler, handleError } from "../helpers/error.helper";
import { registerService } from "../services/registerService";

export const registerController = async (req: Request, res: Response) => {
  try {
    const data = await registerService(req.body);

    return res.status(201).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
