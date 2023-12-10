import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price:{type:Number,required:true},
    description:{type:String,},
    stock:{type:Number, default:0}

})

export const productsModel = mongoose.model('Products', productsSchema)