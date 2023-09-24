import fs from "fs";
const path = "./data/Products.json";

class ProductManager {
  constructor(path) {
    path = path;
  }
  async getProducts(queryObj) {
    const {limit} = queryObj;
    try {
      if (fs.existsSync(path)) {
        const productsFile = await fs.promises.readFile(path, "utf-8");
        const productsData = JSON.parse(productsFile);
        return limit ? productsData.slice(0,+limit) :  productsData;
      } else {
        return [];
      }
    } catch (error) {
      return error;
    }
  }

  async addProduct(product) {
    try {
      const products = await this.getProducts();
      let id
      if (!products.length) {
        id = 1
      } else {
        id = products[products.length - 1].id + 1;
      }
      products.push({id,...product});
      await fs.promises.writeFile(path, JSON.stringify(products));
    } catch (error) {
      return error;
    }
  }

  async getProductById(id) {
    try {
      const products = await this.getProducts({})
      const product = products.find (p => p.id == id)
      if(!product){
        return console.log('Not Found')
         }        
     return product

    } catch (error) {
      return error;
    }
  }

  async deleteProduct(id) {
    try {
      const products = await this.getProducts()
      if(!products[id]){
        console.log('Not Found')
         return 
         }   
      const newProducts = products.filter (p => p.id !== id)
      await fs.promises.writeFile(path, JSON.stringify(newProducts));

    } catch (error) {
      return error;
    }
  }

  async updateProduct(id, newProduct) {
    try {
      const products = await this.getProducts()
      const product = products.find(p => p.id === id)
      if(!product){
        console.log('Not Found')
         return 
         }   
      Object.assign(product,newProduct)
      await fs.promises.writeFile(path, JSON.stringify(products));

    } catch (error) {
      return error;
    }
  }



}
// const product1 = {
//   title: "Celular",
//   description: 'producto que es reemplazado por 4',
//   price: 350,
//   thumbnail: 'rutadeimagen',
//   code: "123abc",
//   stock: 25,
// };
// const product2 = {
//   title: "Notebook",
//   description: 'producto que se elimina',
//   price: 1250,
//   thumbnail: 'rutadeimagen',
//   code: "1123aabc",
//   stock: 15,
// };
// const product3 = {
//   title: "Tablet",
//   description: 'producto que tiene que quedar',
//   price: 550,
//   thumbnail: 'rutadeimagen',
//   code: "1123asadfabc",
//   stock: 15,
// };
// const product4 = {
//   title: "Tv",
//   description: 'producto que tiene que reemplazar a 1',
//   price: 11000,
//   thumbnail: 'rutadeimagen',
//   code: "1ASDFASabc",
//   stock: 15,
// };
// async function test() {
//   const manager = new ProductManager('Products.json');
//   await manager.addProduct(product1);
//   await manager.addProduct(product2);
//   await manager.addProduct(product3)
//   await manager.getProductById(100)
//   await manager.updateProduct(1,product4)
//   await manager.deleteProduct(5)
  
//   const products = await manager.getProducts();
//   console.log(products);
// }

// test();
export const manager = new ProductManager(path);
