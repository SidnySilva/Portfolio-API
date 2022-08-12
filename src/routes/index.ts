import { projectRouter } from "./projects.routes";
import { Express } from "express";
import { userRouter } from "./user.routes";

const router = (app: Express) => {
  app.use(userRouter);
  app.use(projectRouter);
};

export default router;
