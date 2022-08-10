import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.Middleware";
import { addProjectController } from "../controllers/addProject.controller";
import { getProjectController } from "../controllers/getProject.controller";
import { updateProjectController } from "../controllers/updateProject.controller";
import { deleteProjectController } from "../controllers/deleteProject.controller";
import { getProjectByIdController } from "../controllers/getProjectById.controller";
import validateSchema from "../middlewares/validateSchema.Middleware";
import { createProjectSchema } from "../schemas/project/create.schema";

export const projectRouter = Router();

projectRouter.post(
  "/projects",
  validateSchema(createProjectSchema),
  validateToken,
  addProjectController,
);
projectRouter.get("/projects", validateToken, getProjectController);
projectRouter.get("/projects/:id?", validateToken, getProjectByIdController);
projectRouter.patch("/projects/:id", validateToken, updateProjectController);
projectRouter.delete("/projects/:id", validateToken, deleteProjectController);
