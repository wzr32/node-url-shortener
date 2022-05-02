import { Router } from "express";
import { generateShortUrl } from "./generate.controllers";

const generateRouter = Router();

/**
 * @openapi
 * /api/generate:
 *     post:
 *         tags:
 *             - generate
 *         summary: "Generate short url"
 *         description: "Generate a short url and saved to db"
 *         requestBody:
 *             content:
 *                 application/json:
 *                     schema:
 *                         $ref: "#/components/schemas/url"
 *         responses:
 *             '201':
 *                 description: return the short url created
 *             '422':
 *                 description: validation error. The item is not a valid url
 *             '500':
 *                 description: server error. Can't create a short url
 */
generateRouter.post("/", generateShortUrl);

export default generateRouter;
