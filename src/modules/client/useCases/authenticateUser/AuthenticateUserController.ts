import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { password, email } = req.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const userToken = await authenticateUserUseCase.execute({ password, email })

    return res.status(200).json(userToken)
  }
}