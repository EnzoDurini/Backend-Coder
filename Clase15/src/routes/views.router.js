import { Router} from "express";
import { usersManager } from "../managers/usersManager.js";
import {productsManger} from "../managers/productsManager.js"
const router = Router();

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.get("/home/:idUser", async (res,req)=>{
    const {idUser} = req.params
    const user = await usersManager.findById(idUser);
    const products = await productsManger.findAll()
    
    res.render("home")
})
export default router;