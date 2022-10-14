import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../../repositories/ICategoryRepositories";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepositories")
    private categoriesRepository: ICategoryRepositories
  ) { }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories
  }
}