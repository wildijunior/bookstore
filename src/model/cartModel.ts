import fs from "fs";
import path from "path";

const fileDir = path.resolve("src/data", "cart.json");

export default class Cart {
  static addProduct(id: any, productPrice: any) {
    // fetch the previous cart
    fs.readFile(fileDir, (err, fileContent) => {
      let cart: any = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent.toString());
      }
      // analyze the cart => Find existing addProduct
      const existingProductIndex = cart.products.findIndex(
        (prod: any) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct: any;

    // add new product increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      // contador de valor
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(fileDir, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });

  }
}
