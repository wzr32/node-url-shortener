import { Request, Response } from "express";
import URL from "../generate/generate.model";
import colors from "colors";

export const handleShortUrl = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { url } = await URL.findOne({ shortid: id });

    if (!url) {
      return res.status(400).json({
        message: "The url was deleted or not exists. Please check the url.",
      });
    }

    res.status(301).redirect(url);
  } catch (err) {
    console.log(colors.red("Error redirecting url\n"), err);
    res.status(400).json({ message: "Error redirecting url" });
  }
};
