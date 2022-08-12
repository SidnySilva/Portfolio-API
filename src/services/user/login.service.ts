import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { jwtConfig } from "../../configs";
import { ErrorHandler } from "../../helpers/error.helper";
import { prisma } from "../../app";

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  console.log("oi");
  if (!user) {
    throw new ErrorHandler(401, "You aren't my boss");
  }

  const passMatch = await compare(password, user.password);

  if (!passMatch) {
    throw new ErrorHandler(401, "Maybe you are my boss");
  }

  const { secretKey, expiresIn } = jwtConfig;

  const token = sign({ email: email }, secretKey);

  return token;
};
