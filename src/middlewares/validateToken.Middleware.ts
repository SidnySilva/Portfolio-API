import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload, VerifyErrors } from "jsonwebtoken";
import { ErrorHandler, handleError } from "../helpers/error.helper";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token: string = req.headers.authorization;

  try {
    verify(
      token,
      process.env.SECRET_KEY,
      (err: VerifyErrors, decoded: string | JwtPayload) => {
        if (!token) {
          throw new ErrorHandler(400, "Missing authorization token.");
        }
        if (err) {
          throw new ErrorHandler(401, `Unauthorized`);
        }
        req.decoded = decoded;
        return next();
      },
    );
  } catch (err) {
    return handleError(err, res);
  }
};
