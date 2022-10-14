import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepositories } from "../../repositories/ISpecificationRepositories";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepositories")
    private specificationsRepositories: ISpecificationRepositories
  ) { }

  async execute(): Promise<Specification[]> {
    const specification = await this.specificationsRepositories.list();

    return specification
  }
}