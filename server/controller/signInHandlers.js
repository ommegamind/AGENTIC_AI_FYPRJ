import { dbAddUserHandler } from "../model/addUserModel.js";
import { tokenHandler } from "./tokenHandler.js";

export const handleAddUser= (req,res)=>{
    const {user_name, user_password}= req.body;

    const userData={
        userName: user_name,
        userPassword: user_password
    }

    const {accessToken, refreshToken}=tokenHandler(userData)
    res.cookie("pigonAT", accessToken,{
        httpOnly:false,
        sameSite:"lax",
        path:"/"
    });
    res.cookie("pigonRT", refreshToken,{
        httpOnly: true,
        sameSite:"lax",
        path:"/"
    })
    res.send("cookies set")
    dbAddUserHandler(user_name, user_password, refreshToken);
}