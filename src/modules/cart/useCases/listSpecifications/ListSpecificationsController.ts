import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const specificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const specifications = await specificationsUseCase.execute()

    return res.status(200).json({ specifications })
  }
}
