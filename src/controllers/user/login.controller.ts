import { Request, Response } from "express";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { loginService } from "../../services/user/login.service";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof ErrorHandler) {
      handleError(err, res);
    }
  }
};
