import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const URLSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortid: {
      type: String,
      default: nanoid(7),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("url", URLSchema);
