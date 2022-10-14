import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, driverLicense } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase)

    if (!name || !email || !password || !driverLicense) {
      return res.status(404).json({ message: "Missing information" })
    }

    await createUserUseCase.execute({
      name,
      email,
      password,
      driverLicense,
    })

    return res.status(201).json({ message: "User created successfully" })
  }
}