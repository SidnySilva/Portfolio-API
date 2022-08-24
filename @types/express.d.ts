export {};

declare global {
  namespace Express {
    interface Request {
      validated: any;
      decoded: any;
      email: string;
    }
  }
}
