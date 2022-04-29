import express from "express";
import morgan from "morgan";
import { handleShortUrl } from "./modules/redirection/redirect.cotroller";
import { router } from "./routes/index.routes";

export const app = express();

app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/:id", handleShortUrl);
app.use("/api", router);
