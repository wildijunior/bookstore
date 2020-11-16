import { Request, Response } from "express";
import path from "path";

import Product from "../model/productModel";

export default {
  getProducts(req: Request, res: Response) {
    Product.fetchAll((products: any) => {
      res.render(path.resolve("src/views/admin/products"), {
        produtos: products,
      });
    });
  },

  getEditProduct(req: Request, res: Response) {
    res.render(path.resolve("src/views/admin/edit-product"));
  },

  getAddProduct(req: Request, res: Response) {
    res.render(path.resolve("src/views/admin/add-product"));
  },

  postAddProduct(req: Request, res: Response) {
    // pega dados informados do form
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    // cria produto e insere dados
    const product = new Product({ title, imageURL, price, description });
    product.save();
    res.redirect("/");
  },
};
