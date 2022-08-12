import bcrypt from "bcrypt";
import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";

interface User {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerService = async (userData: User) => {
  const userEmail = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });
  const userNickName = await prisma.user.findUnique({
    where: {
      nickname: userData.nickname,
    },
  });
  if (userEmail || userNickName) {
    throw new ErrorHandler(400, "User already exists");
  }

  userData.password = await bcrypt.hash(userData.password, 10);

  const data = await prisma.user.create({
    data: {
      nickname: userData.nickname,
      email: userData.email,
      password: userData.password,
    },
  });

  const userCreated = {
    id: data.user_id,
    nickname: data.nickname,
    email: data.email,
  };

  return userCreated;
};
