import { prisma } from "../../app";

export const getProjectService = async (userEmail: string) => {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { projects: true },
  });

  const { nickname, email } = user;

  const newUser = {
    nickname: nickname,
    email: email,
    projects: user.projects,
  };

  return newUser;
};
