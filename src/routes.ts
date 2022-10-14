import { Router } from "express";

import { CreateCategoryController } from "./modules/cart/useCases/createCategory/CategoryController";
import { ListCategoriesController } from "./modules/cart/useCases/listCategories/ListCategoriesController";
import { ListSpecificationController } from "./modules/cart/useCases/listSpecifications/ListSpecificationsController";
import { CreateSpecificationController } from "./modules/cart/useCases/createSpecification/CreateSpecificationController";
import { CreateUserController } from "./modules/client/useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "./modules/client/useCases/authenticateUser/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { UpdateUserAvatarController } from "./modules/client/useCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer";
import uploadConfig from "./config/upload";

export const routes = Router();

const createCategoryController = new CreateCategoryController();
const createSpecificationController = new CreateSpecificationController();
const listCategoriesController = new ListCategoriesController();
const listSpecificationsController = new ListSpecificationController();
const createUsersController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/images"))

// Categories
routes.post("/categories", ensureAuthenticated, createCategoryController.handle);
routes.get("/categories", ensureAuthenticated, listCategoriesController.handle);

//Specifications
routes.post("/specifications", ensureAuthenticated, createSpecificationController.handle);
routes.get("/specifications", ensureAuthenticated, listSpecificationsController.handle);

//Users
routes.post("/users", createUsersController.handle);
routes.patch("/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle)

//Autenticação
routes.post("/login", authenticateUserController.handle)