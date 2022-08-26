import fs from "fs";
import { ICategoriesRepository } from "../types/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CategoriesServices {
  constructor(private categoriesRepository: ICategoriesRepository) { };

  createCategoryService({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  };

  importCategoryService(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    console.log(stream);
  }
}