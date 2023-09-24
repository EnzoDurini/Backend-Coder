import express from "express";
import { manager } from "./ProductManager.js";


const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Loading')
})

app.get('/api/products',async (req,res) =>{
    try{
        const products = await manager.getProducts(req.query)
        res.status(200).json({message: 'Products found', products})
    }catch(e){
        res.status(500).json({message: e.message})
    }
    

})

app.get('/api/products/:id', async (req,res) =>{
   const {id} = req.params
   try {
    const product =  await manager.getProductById(+id);
    if(!product){
        return res.status(404).json({message:"Product not found with the id provided"})
    }
    res.status(200).json({message:'Product found',product})
   } catch (e) {
    res.status(500).json({message: e.message})
   }
    
})
//create a new product
app.post("/api/products",async(req,res) =>{
    const {title,description,price,thumbnail,code,stock} = req.body
    if(!title || !description || !price || !thumbnail || !code || !stock){
        return res.status(400).json({message: "Some data is missing"})
    }
    try {
        const p = await manager.addProduct(req.body)
        res.status(200).json({message: "User created", product: p})
        
    } catch (e) {
        res.status(500).json({message: e.message})
    }

})
//delete a product
app.delete('/api/products/:id', async (req,res) =>{
    const {id} = req.params
    try {
        const p = await manager.deleteProduct(+id)
        if (!p )return res.status(404).json("No product found with the id provided")
        res.status(200).json({ message: "Product deleted" });
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
    console.log(req.params);
    const product =  await manager.deleteProduct(req);
    res.json({message:'Product found',product})
})

app.put('api/products/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const p = await manager.updateProduct(+id,req.body)
        if(!p){
            return res.status(404).json({message:"No product found with the id provided"});
        }
        res.status(200).json({message: 'Product updated'})
    } catch (e) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(8080, () =>{
    console.log("Listening on 8080");
})

