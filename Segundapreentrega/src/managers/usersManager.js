import {usersModel} from "../db/models/users.model.js"

class UsersManager{
    async findAll(){
        const response = await usersModel.find();
        return response;
    }

    async findById(id){
        const response = await usersModel.findOne({_id: id});
        return response;
    }

    async createOne(obj){
       const response = await usersModel.updateOne({_id:id},obj)
       return response;
    }

    async updateOne(id, obj){
        const response =  await usersModel.updateOne({_id:id},obj);
        return response;
    }

    async deleteOne(id){
        const response = await usersModel.deleteOne({_id:id})
    }

}
export const usersManager = new UsersManager()