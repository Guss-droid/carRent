import { Specification } from "../entities/Specification";

export interface ISpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepositories {
  create({description, name}: ISpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}