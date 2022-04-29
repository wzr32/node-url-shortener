import { Router } from "express";
import { generateShortUrl } from "./generate.controllers";

const generateRouter = Router();

generateRouter.post("/", generateShortUrl);

export default generateRouter;
