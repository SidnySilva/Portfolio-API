import dotenv from "dotenv";
dotenv.config();

export const jwtConfig = {
  secretKey: process.env.SECRET_KEY as string,
  expiresIn: process.env.EXPIRES_IN as string,
};
