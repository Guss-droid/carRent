import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/inMemory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it("should be able to create a new category", async () => {
    await createCategoryUseCase.execute({
      name: "John Doe Category",
      description: "Category of John Doe"
    });

    const category = await categoriesRepositoryInMemory.findByName("John Doe Category");

    expect(category).toHaveProperty("id");
  });

  it("should not be able to create a category", () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: "John Doe Category",
        description: "Category of John Doe"
      });

      await createCategoryUseCase.execute({
        name: "John Doe Category",
        description: "Category of John Doe"
      });
    }).rejects.toBeInstanceOf(AppError)
  });
});