import { Category } from "../entities/Category";

export interface ICategoryDTO {
  name: string;
  description: string;
} 

export interface ICategoryRepositories {
  create({ name, description}: ICategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}