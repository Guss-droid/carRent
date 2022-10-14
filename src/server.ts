import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "reflect-metadata";
import { routes } from "./routes";

import swagger from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

import "./database";
import "./shared/container";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDoc))
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`
  });
})

app.listen(3333, () => console.log("Server is running"));