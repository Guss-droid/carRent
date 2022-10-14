import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISpecificationRepositories } from "../../repositories/ISpecificationRepositories";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepositories")
    private specificationRepositories: ISpecificationRepositories
  ) { }

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepositories.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("specification already exists!")
    }

    await this.specificationRepositories.create({ name, description })
  }
}