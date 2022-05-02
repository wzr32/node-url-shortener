import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { handleShortUrl } from "./modules/redirection/redirect.cotroller";
import { router } from "./routes/index.routes";

export const app = express();

app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerSetup));
app.use("/api", router);
app.use("/:id", handleShortUrl);
