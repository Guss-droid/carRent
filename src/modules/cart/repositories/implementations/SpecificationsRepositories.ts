import { Specification } from "../../entities/Specification";
import { Repository, getRepository } from "typeorm";
import { ISpecificationDTO, ISpecificationRepositories } from "../ISpecificationRepositories";

export class SpecificationsRepositories implements ISpecificationRepositories {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }
}