import mongoose from "mongoose";
import colors from "colors";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost/url-shortener-db");
    console.log(colors.green(`Database connected to ${db.connection.name}`));
  } catch (err) {
    console.log(colors.red("Error connecting to database\n"), err);
  }
})();
