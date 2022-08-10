import { Project, User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      validated: User | Project;
      decoded: Partial<User>;
      email: string;
    }
  }
}
