import { Request, Response } from "express";
import path from "path";
import viewsDir from "../util/viewsDir";

import Product from "../model/productModel";

export default {
  index(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve(viewsDir, "shop/index"), {
        produtos: products,
      });
    });
  },

  getProducts(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve(viewsDir, "shop/product-list"), {
        produtos: products,
      });
    });
  },

  getProduct(req: Request, res: Response) {
    const prodId = req.params.productId;
    console.log(prodId);

    res.redirect("/");
  },

  getCart(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/cart"));
  },

  getOrders(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/orders"));
  },

  getCheckout(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/checkout"));
  },
};
