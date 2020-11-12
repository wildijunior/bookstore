import Router from "express";
import adminController from "../controller/admin";

const routes = Router();

routes.get("/products", adminController.getProducts);

routes.get("/edit-product", adminController.getEditProduct);
routes.get("/add-product", adminController.getAddProduct);
routes.post("/add-product", adminController.postAddProduct);

export default routes;
