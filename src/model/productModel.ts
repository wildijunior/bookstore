import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

const dataFileDir = path.resolve("src/data", "products.json");

// HOOK para pegar dados do arquivo
const getProductsFromFile = (cb: any) => {
  fs.readFile(dataFileDir, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

// interface
interface IUser {
  title: string;
  imageURL: string;
  price: number;
  description: string;
}

export default class Product {
  title: string;
  imageURL: string;
  price: number;
  description: string;
  id: string;

  constructor(user: IUser) {
    this.title = user.title;
    this.imageURL = user.imageURL;
    this.price = user.price;
    this.description = user.description;
  }

  // salva dados inseridos no arquivo em formato array de objetos/json
  save() {
    // gera id unico para cada produto cadastrado
    this.id = uuidv4();

    getProductsFromFile((products: any) => {
      products.push(this);
      fs.writeFile(dataFileDir, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // retorna todos os dados
  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }

  // procura produto por id
  // id - como argumento
  // callback - que sera executada quando encontrarmos o produto pelo id
  static findById(id: string, cb: any) {
    // pega array de objetos contendo os produtos
    getProductsFromFile((products: any) => {
      // filtramos o produto pelo id
      // produra um id especifico no array de objeto produtos
      // produra pelo id dentro do array e volta o produto com aquele id
      // p = produto passado como argumento para verificar id dele com id passado como argumento la em cima
      const product = products.find((p: any) => p.id === id);
      // callback que retorna o produto
      cb(product);
    });
  }
}
