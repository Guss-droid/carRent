import { Category } from "../../entities/Category";
import { Repository, getRepository } from "typeorm";
import { ICategoryDTO, ICategoryRepositories } from "../ICategoryRepositories";

export class CategoriesRepositories implements ICategoryRepositories {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }
}