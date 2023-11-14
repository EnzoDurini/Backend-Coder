import { Router} from "express";
import {cartsManager} from "../managers/cartsManager.js"

const router = Router();

router.get('/', async (req,res)=>{
    try {
        const carts = await cartsManager.findAll();
        res.status(200).json({message: 'Carts', carts})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.post('/', async(req,res)=>{
    try {
        const createCart = await cartsManager.createOne(req.body);
        res.status(200).json({message:'Created', product : createCart})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:idCart', async(req,res) =>
{
    try{
        await cartsManager.deleteOne(idCart);
        res.status(200).json({message:`cart deleted`});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})


export default router;