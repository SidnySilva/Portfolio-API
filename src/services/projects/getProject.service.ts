import { prisma } from "../../app";

export const getProjectService = async () => {
  // const user = await prisma.user.findUnique({
  //   where: { email: userEmail },
  //   include: { projects: true },
  // });
  const projects = await prisma.project.findMany();

  // const { nickname, email } = user;

  // const newUser = {
  //   nickname: nickname,
  //   email: email,
  //   projects: user.projects,
  // };

  return projects;
};
