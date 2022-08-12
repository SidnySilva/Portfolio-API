import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload, VerifyErrors } from "jsonwebtoken";
import { ErrorHandler, handleError } from "../helpers/error.helper";

interface IUser {
  email: string;
}

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token: string = req.headers.authorization;

  if (!token) {
    throw new ErrorHandler(400, "Missing authorization token.");
  }
  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
        throw new ErrorHandler(401, "Invalid Token.");
      }

      req.decoded = decoded as Partial<User>;

      return next();
    },
  );
};