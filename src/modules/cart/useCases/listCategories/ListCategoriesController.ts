import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const categoriesUseCase = container.resolve(ListCategoriesUseCase);
    const categories = await categoriesUseCase.execute();

    return res.status(200).json({ categories })
  }
}
