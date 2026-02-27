import pool from "../config/pgModel.js";

export const dbAddUserHandler= async(name, password, refreshToken)=>{
    try{
        await pool.query(
            "INSERT INTO trial (user_name, user_password, user_refresh_token) VALUES ($1, $2, $3)",
            [name, password, refreshToken]
        )
    }catch(err){
        console.log(err);
    }
}

export const dbRemoveUserHandler= async(userToken)=>{
    try{
        const removeUser=await pool.query(
            "DELETE FROM trial WHERE user_refresh_token =$1",
            [userToken]
        )
        console.log(`db remove query ${removeUser.rowCount}`);
    }catch(err){
        console.log(err);
    }
}