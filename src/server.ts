import express from "express";
import { routes } from "./routes";
import swagger from "swagger-ui-express";

import swaggerDoc from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDoc))
app.use(routes);

app.listen(3333, () => console.log("Server is running"));