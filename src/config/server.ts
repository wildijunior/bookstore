import express from "express";
import bodyParser from "body-parser";
import cssDir from "../util/cssDir";

import adminRoutes from "../routes/admin";
import shopRoutes from "../routes/shop";
import page404 from "../routes/page404";

const app = express();

export default () => {
  
  app.set("view engine", "ejs");
  app.use(express.static(cssDir));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/admin", adminRoutes);
  app.use(shopRoutes);
  app.use(page404);

  return app;
};
