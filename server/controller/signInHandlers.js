import { dbAddUserHandler } from "../model/addUserModel.js";

export const handleAddUser= async (req,res)=>{
    const {user_name, user_password}= await(req.body);
    dbAddUserHandler(user_name, user_password);
    console.log(user_name,user_password);
}