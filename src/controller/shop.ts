import { Request, Response } from "express";
import path from "path";

import Product from "../model/productModel";
import Cart from "../model/cartModel";

export default {
  index(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve("src/views/shop/index"), {
        produtos: products,
      });
    });
  },

  // products list
  getProducts(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve("src/views/shop/product-list"), {
        produtos: products,
      });
    });
  },

  // pega apenas um produto pelo id e mostra na view product-detail
  getProduct(req: Request, res: Response) {
    const prodId = req.params.productId;

    Product.findById(prodId, (product: any) => {
      res.render(path.resolve("src/views/shop/product-detail"), {
        prods: product,
      });
    });
  },
  getCart(req: Request, res: Response) {
    res.render(path.resolve("src/views/shop/cart"));
  },

  postCart(req: Request, res: Response) {
    const prodId = req.body.productId;
    
    Product.findById(prodId, (product: any) => {
      Cart.addProduct(prodId, product.price);
    });

    res.redirect("/cart");
  },

  getOrders(req: Request, res: Response) {
    res.render(path.resolve("src/views/shop/orders"));
  },

  getCheckout(req: Request, res: Response) {
    res.render(path.resolve("src/views/shop/checkout"));
  },

  getAbout(req: Request, res: Response) {
    res.render(path.resolve("src/views/shop/about"));
  },
};
