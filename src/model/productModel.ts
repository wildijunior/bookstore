import { v4 as uuidv4 } from 'uuid';
import path from "path";
import fs from "fs";

// fileDir
const dataFileDir = path.resolve("src", "data", "products.json");

// HOOK
const getProductsFromFile = (cb: any) => {
  fs.readFile(dataFileDir, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

interface IUser {
  title: string;
  imageURL: string;
  price: number;
  description: string;
}

export default class Products {
    
  title: string;
  imageURL: string;
  price: number;
  description: string;
  id:string;

  constructor(user: IUser) {
    this.title = user.title;
    this.imageURL = user.imageURL;
    this.price = user.price;
    this.description = user.description;
  }

  save() {
    this.id = uuidv4();

    getProductsFromFile((products: any) => {
      products.push(this);
      fs.writeFile(dataFileDir, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }
}
