import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ driverLicense, email, name, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { driverLicense, email, name, password });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(u => u.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(u => u.id === id);

    return user;
  }
}