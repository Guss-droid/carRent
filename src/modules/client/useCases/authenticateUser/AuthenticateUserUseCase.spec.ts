import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/inMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUser: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUser: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUser = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUser = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate", async () => {
    await createUser.execute({
      driverLicense: "0358101315",
      email: "John@example.com",
      password: "1335",
      name: "John Doe",
    });

    const result = await authenticateUser.execute({
      email: "John@example.com",
      password: "1335",
    });

    expect(result).toHaveProperty("token")
  });

  it("should not be able to authenticate without user", () => {
    expect(async () => {
      await authenticateUser.execute({
        email: "John@example.com",
        password: "1335",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate wit incorrect password", () => {
    expect(async () => {
      await createUser.execute({
        driverLicense: "0358101315",
        email: "John@example.com",
        password: "1335",
        name: "John Doe",
      });

      await authenticateUser.execute({
        email: "John@example.com",
        password: "112315",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
})