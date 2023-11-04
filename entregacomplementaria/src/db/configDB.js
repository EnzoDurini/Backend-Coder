
import mongoose from "mongoose";

const URI = "mongodb+srv://enzodurini:wTvovJGHRLTSVUmY@cluster0.yxqdylx.mongodb.net/coder-backend?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=>console.log('Conectado a la DB'))
.catch(error => console.log(error))