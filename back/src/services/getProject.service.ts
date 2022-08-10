import { ErrorHandler } from "../helpers/error.helper";
import { prisma } from "../app";

export const getProjectService = async (userEmail: string) => {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { projects: true },
  });

  return user;
};
