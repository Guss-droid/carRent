import { User } from "../entities/User";

export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
  driverLicense: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}