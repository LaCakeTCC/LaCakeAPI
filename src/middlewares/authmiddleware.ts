import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Have to be a authorization" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const user = await jwt.verify(token, "secret");

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Have to be a authorization" });
  }
};
