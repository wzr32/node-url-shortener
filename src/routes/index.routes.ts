import { Router, Response } from "express";
import generateRouter from "../modules/generate/generate.routes";

export const router = Router();

router.get("/", (_, res: Response) =>
  res.status(200).json({ message: "api working!" })
);
router.use("/generate", generateRouter);
