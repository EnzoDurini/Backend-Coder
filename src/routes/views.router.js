import { Router } from "express";
import {productsManager} from '../ProductManager.js';

const router = Router()


router.get('/',async(req,res)=>{
    try {
        const products = await productsManager.getProducts({})
        res.render('home', { response: products })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/realtimeproducts', async (req, res) => {
    try {
        const products = await productsManager.getProducts({})
        res.render('realTimeProducts', { response: products })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router