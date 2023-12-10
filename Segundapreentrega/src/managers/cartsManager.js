import { cartsModel } from "../db/models/carts.model.js";

class CartsManager {
    async findAll(){
        const result = await cartsModel.find().lean()
        return result;
    }
    async findById(id){
        const result =  await cartsModel.findOne({_id: id})
        return result
    }
    async createOne(obj){
        const result= await cartsModel.create(obj)
    }

    async updateOne(id,obj){
        const result = await cartsModel.updateOne({_id:id},obj)
        return result
    }

    async deleteOne(id){
        const result = await cartsModel.deleteOne({ _id: id})
        return result
    }


}


export const cartsManager = new CartsManager()