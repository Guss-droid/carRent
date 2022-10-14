import { Category } from "../../entities/Category";
import { ICategoryDTO, ICategoryRepositories } from "../ICategoryRepositories";

export class CategoriesRepositoryInMemory implements ICategoryRepositories {
  categories: Category[] = [];

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(c => c.name === name);

    return category
  }

  async list(): Promise<Category[]> {
    const categories = this.categories;

    return categories
  }
}