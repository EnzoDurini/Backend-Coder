import { Router} from "express";
import {productsManager} from "../managers/productsManager.js"

const router = Router();

router.get('/', async (req,res)=>{
    try {
        const products = await productsManager.findAll();
        res.status(200).json({message: 'Products', products})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.post('/', async(req,res)=>{
    try {
        const createProduct = await productsManager.createOne(req.body);
        res.status(200).json({message:'Product created', product : createProduct})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:idProduct', async(req,res) =>
{
    try{
        await productsManager.deleteOne(idProduct);
        res.status(200).json({message:`product deleted`});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})


export default router;