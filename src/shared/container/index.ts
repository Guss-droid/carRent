import { container } from "tsyringe";

import { ICategoryRepositories } from "../../modules/cart/repositories/ICategoryRepositories";
import { CategoriesRepositories } from "../../modules/cart/repositories/implementations/CategoriesRepositories";

import { ISpecificationRepositories } from "../../modules/cart/repositories/ISpecificationRepositories";
import { SpecificationsRepositories } from "../../modules/cart/repositories/implementations/SpecificationsRepositories";

import { IUsersRepository } from "../../modules/client/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/client/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoryRepositories>(
  "CategoriesRepositories",
  CategoriesRepositories
);

container.registerSingleton<ISpecificationRepositories>(
  "SpecificationsRepositories",
  SpecificationsRepositories
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)