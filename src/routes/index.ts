import { projectRouter } from "./projects.routes";
import { Express } from "express";

const router = (app: Express) => {
  app.use(projectRouter);
};

export default router;
