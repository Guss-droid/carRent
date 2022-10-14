import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/client/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
  // exp: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "Hvtubwp!Mjoep!Sê") as IPayload;

    const usersRepository = new UsersRepository()
    const userExists = usersRepository.findById(sub)

    if(!userExists) {
      throw new AppError("User does not exists!", 401)
    }

    req.user = {
      id: sub
    }

    next();
  } catch (err) {
    throw new AppError("Invalid token", 401)
  }
}