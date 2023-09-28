import fs from "fs";
import { productsManager } from "./ProductManager";
import { error } from "console";
const path = "./data/CartsFile.json";

class CartsManager {
  
  async getCarts() {
    try {
      if (fs.existsSync(path)) {
        const cartsFile = await fs.promises.readFile(path, "utf-8");
        const cartsData = JSON.parse(cartsFile);
        return cartsData
      } else {
        console.log("Not exist")
        return [];
      }
    } catch (error) {
      return error;
    }
  }

  async createCart() {
    try {
      const carts = await this.getCarts();
      let id
      if (!carts.length) {
        id = 1
      } else {
        id = carts[carts.length - 1].id + 1;
      }
      const newCart = {id,products: []}
      carts.push( newCart );
      await fs.promises.writeFile(path, JSON.stringify(carts));
      return newCart
    } catch (error) {
      return error;
    }
  }

  async getCartById(id) {
    try {
      const carts = await this.getCarts({})
      const cart = carts.find (c => c.id == id)
      if(!cart){
        return console.log('Not Found')
         }        
     return cart

    } catch (error) {
      return error;
    }
  }

  async addProductToCart(idCart,idProduct){
    try{
        const cart = await this.getCartById(idCart)
        if(!cart ){
            throw new Error('There is no cart with this id')
            }
        const product = await productsManager.getProductById(idProduct)
        if(!product){
            throw new Error('There is no product with this id')
  }
        const pIndex = cart.products.find(p=> p.id === +idProduct)
        if(pIndex === -1){
            const newProduct = {id:idProduct,quantity:1}
            cart.products.push(newProduct)
        } else {
            cart.products[pIndex].quantity++
        }
        
  }
catch(e){
    return e;
}}}












export const CartsManager = new CartsManager(path);