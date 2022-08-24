import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.Middleware";
import { addProjectController } from "../controllers/projects/addProject.controller";
import { getProjectController } from "../controllers/projects/getProject.controller";

import { validateSchema } from "../middlewares/validateSchema.Middleware";
import { createProjectSchema } from "../schemas/project/create.schema";
import { getProjectByIdController } from "../controllers/projects/getProjectById.controller";
import { updateProjectController } from "../controllers/projects/updateProject.controller";
import { deleteProjectController } from "../controllers/projects/deleteProject.controller";

export const projectRouter = Router();

projectRouter.post(
  "/projects",
  validateSchema(createProjectSchema),
  validateToken,
  addProjectController,
);
projectRouter.get("/projects", getProjectController);
projectRouter.get("/projects/:id", validateToken, getProjectByIdController);
projectRouter.patch("/projects/:id", validateToken, updateProjectController);
projectRouter.delete("/projects/:id", validateToken, deleteProjectController);
