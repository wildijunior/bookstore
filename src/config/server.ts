import express from "express";
import bodyparser from "body-parser";
import path from "path";

import adminRoutes from "../routes/admin";
import shopRoutes from "../routes/shop";
import page404Route from "../routes/page404";

const app = express();

export default () => {
  app.set("view engine", "ejs");
  app.use(express.static(path.resolve("src/public")));
  app.use(bodyparser.urlencoded({ extended: false }));

  app.use("/admin", adminRoutes);
  app.use(shopRoutes);
  app.use(page404Route);

  return app;
};
