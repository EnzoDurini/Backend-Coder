import { Router } from "express";
import {productsManager} from '../ProductManager.js';
const router = Router()



router.get('/',async (req,res) =>{
    try{
        const products = await productsManager.getProducts(req.query)
        if(!products.lenght){
            return res.status(200).json({message:"No products"})
        }
        res.status(200).json({message: 'Products found', products})
    }catch(e){
        res.status(500).json({message: e.message})
    }
    

})

router.get('/:id', async (req,res) =>{
   const {id} = req.params
   try {
    const product =  await productsManager.getProductById(+id);
    if(!product){
        return res.status(404).json({message:"Product not found with the id provided"})
    }
    res.status(200).json({message:'Product found',product})
   } catch (e) {
    res.status(500).json({message: e.message})
   }
    
})
//create a new product
router.post("/",async(req,res) =>{
    const {title,description,price,code,stock} = req.body
    if(!title || !description || !price || !code || !stock){
        return res.status(400).json({message: "Some data is missing"})
    }
    try {
        const p = await productsManager.addProduct(req.body)
        res.status(200).json({message: "Product created", product: p})
        
    } catch (e) {
        res.status(500).json({message: e.message})
    }

})
//delete a product
router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    try {
        const p = await productsManager.deleteProduct(+id)
        if (!p )return res.status(404).json("No product found with the id provided")
        res.status(200).json({ message: "Product deleted" });
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
    console.log(req.params);
    const product =  await productsManager.deleteProduct(req);
    res.json({message:'Product found',product})
})

router.put('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const p = await productsManager.updateProduct(+id,req.body)
        if(!p){
            return res.status(404).json({message:"No product found with the id provided"});
        }
        res.status(200).json({message: 'Product updated'})
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
})

export default router;