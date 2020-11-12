import Router from "express";
import shopController from "../controller/shop";

const routes = Router();

routes.get("/", shopController.index);
routes.get("/cart", shopController.getCart);
routes.get("/orders", shopController.getOrders);
routes.get("/products", shopController.getProducts);
routes.get("/checkout", shopController.getCheckout);

export default routes;
