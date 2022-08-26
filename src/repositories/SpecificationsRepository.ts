import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../types/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date()
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find(specification => specification.name === name)

    return specification
  }

  list() {
    return this.specifications
  }
}