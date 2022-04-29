import { app } from "./app";
import colors from "colors";
import "./database";

const PORT = app.get("port");

(async () => {
  await app.listen(PORT);
  console.log(colors.green(`Server on port ${PORT}`));
})();
