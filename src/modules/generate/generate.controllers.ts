import { Request, Response } from "express";
import URL from "./generate.model";
import colors from "colors";
import { nanoid } from "nanoid";
import { validateUrl } from "../../helpers/helpers";

export const generateShortUrl = async (req: Request, res: Response) => {
  const { url } = req.body;

  const validate = await validateUrl(url);

  if (!validate)
    return res.status(422).json({
      message: "Please enter a valid url",
      example: "https://www.example.com || https://example.com",
    });

  try {
    const newShortUrl = await new URL({ url, shortid: nanoid(7) });
    const shortUrl = await newShortUrl.save();

    res.status(201).json({ shortUrl });
  } catch (err) {
    console.log(colors.red("Error creating short url\n"), err);
    res.status(500).json({ message: "Error creating short url" });
  }
};
