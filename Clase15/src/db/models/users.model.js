import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    orders: [
        {
        order_id:{type: Number,//id
    },
    product_id:{type:Number}, //product id
    quantity:{type:Number},
    price:{type:Number},

    },],

});

export const usersModel= mongoose.model('Users', usersSchema);