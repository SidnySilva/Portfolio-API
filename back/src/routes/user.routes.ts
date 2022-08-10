import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { registerController } from "../controllers/register.controller";
import validateSchema from "../middlewares/validateSchema.Middleware";
import { createUserSchema } from "../schemas/user/create.schema";

export const userRouter = Router();

userRouter.post("/login", loginController);
userRouter.post(
  "/register",
  validateSchema(createUserSchema),
  registerController,
);
