import multer from "multer";
import { Router } from "express";

import { CategoriesServices } from "./services/CategoriesServices";
import { CategoriesRepository } from "./repositories/CategoriesRepository";

import { SpecificationsServices } from "./services/SpecificationsServices";
import { SpecificationsRepository } from "./repositories/SpecificationsRepository";

export const routes = Router();
const upload = multer({ dest: "./tmp" });

const categoriesRepository = new CategoriesRepository();
const specificationsRepository = new SpecificationsRepository();

routes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const categoriesServices = new CategoriesServices(categoriesRepository);

  categoriesServices.createCategoryService({ name, description });

  return res.status(201).send();
});

routes.get("/categories", (req, res) => {
  const list = categoriesRepository.list();

  return res.status(200).json({ list });
});

routes.post("/import", upload.single("file"), (req, res) => {
  const { file } = req;

  const categoryService = new CategoriesServices(categoriesRepository);

  categoryService.importCategoryService(file);

  return res.status(200).send();
});

routes.post("/specifications", (req, res) => {
  const { name, description } = req.body;

  const specificationsService = new SpecificationsServices(specificationsRepository);

  specificationsService.createSpecificationServices({ name, description });

  return res.status(201).send();
});

routes.get("/specifications", (req, res) => {
  const list = specificationsRepository.list();

  return res.status(200).json({ list });
});