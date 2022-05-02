import { Router, Response } from "express";
import generateRouter from "../modules/generate/generate.routes";

export const router = Router();

router.use("/generate", generateRouter);
