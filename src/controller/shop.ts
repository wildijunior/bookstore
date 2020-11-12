import { Request, Response } from "express";
import path from "path";
import viewsDir from "../util/viewsDir";

import Product from "../model/productModel";

export default {
  // index
  index(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve(viewsDir, "shop/index"), {
        produtos: products,
      });
    });
  },

  // products list
  getProducts(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve(viewsDir, "shop/product-list"), {
        produtos: products,
      });
    });
  },

  // pega apenas um produto pelo id e mostra na view product-detail
  getProduct(req: Request, res: Response) {
    const prodId = req.params.productId;

    Product.findById(prodId, (product: any) => {
      res.render(path.resolve(viewsDir, "shop/product-detail"),{
        prods: product,
      });
    });
  },

  // get para /cart
  getCart(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/cart"));
  },

  // get para /orders
  getOrders(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/orders"));
  },

  // get para /checkout
  getCheckout(req: Request, res: Response) {
    res.render(path.resolve(viewsDir, "shop/checkout"));
  },
};
