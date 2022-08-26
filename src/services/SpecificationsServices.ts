import { ISpecificationsRepository } from "../types/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class SpecificationsServices {
  constructor(private specificationsRepository: ISpecificationsRepository) { };

  createSpecificationServices({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  };
}