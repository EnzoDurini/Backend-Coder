
import mongoose from "mongoose";

const URI = "mongodb+srv://enzodurini:wTvovJGHRLTSVUmY@cluster0.yxqdylx.mongodb.net/ecommerce?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=>console.log('Conectado a la DB'))
.catch(error => console.log(error))