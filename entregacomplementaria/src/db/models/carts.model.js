import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    products: [{
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 }
        
    }],
    price:{type:Number,required:true},
    description:{type:String,},
    stock:{type:Number, default:0},
})

export const cartsModel = mongoose.model('Carts', cartsSchema)