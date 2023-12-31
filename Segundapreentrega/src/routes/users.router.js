import { Router} from "express";
import {usersManager} from '../managers/usersManager.js'
const router = Router();

router.get('/', async (req,res)=>{
    try {
        const users = await usersManager.findAll();
        res.status(200).json({message: 'Users',users})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:idUser',async(req,res)=>{
    const {idUser} = req.params
    try {
        const user = await usersManager.findById(idUser)
        res.status(200).json({message: "User: ", user})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete(':/idUser', async(req,res) => {
    const { idUser } = req.params;
    try{
        await usersManager.deleteOne(idUser);
        res.status(200).send(`Deleted User`);
}
catch(error){
        res.status(500).json({error:error.message})
}})

router.post('/',async(req,res)=>{
    const {first_name, last_name, email, password} = req.body;
    if(!first_name || !last_name || !email || !password ){
        return res.status(400).json({ error:'Missing parameters.'});
    }
    try {
        const newUser=await usersManager.createOne(req.body);
        res.status(200).json({ message: `Created a new user`,newUser })    }

catch(error){ res.status(500).json({error:error.message})}})

export default router;