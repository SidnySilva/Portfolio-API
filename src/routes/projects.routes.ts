import { Router } from "express";
import { addProjectController } from "../controllers/projects/addProject.controller";
import { getProjectController } from "../controllers/projects/getProject.controller";
import { getProjectByIdController } from "../controllers/projects/getProjectById.controller";
import { updateProjectController } from "../controllers/projects/updateProject.controller";
import { deleteProjectController } from "../controllers/projects/deleteProject.controller";

export const projectRouter = Router();

projectRouter.post("/projects", addProjectController);
projectRouter.get("/projects", getProjectController);
projectRouter.get("/projects/:id", getProjectByIdController);
projectRouter.patch("/projects/:id", updateProjectController);
projectRouter.delete("/projects/:id", deleteProjectController);
