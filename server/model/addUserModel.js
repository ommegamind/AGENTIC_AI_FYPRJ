import pool from "../config/pgModel.js";

export const dbAddUserHandler= async(userData, refreshToken)=>{
    try{
        await pool.query(
            "INSERT INTO pigeondb (user_refresh_token, user_google_token) VALUES ($1, $2)",
            [refreshToken, userData]
        )
    }catch(err){
        console.log(err);
    }
}

export const dbRemoveUserHandler= async(userToken)=>{
    try{
        const removeUser=await pool.query(
            "DELETE FROM pigeondb WHERE user_refresh_token =$1",
            [userToken]
        )
        console.log(`db remove query ${removeUser.rowCount}`);
        return removeUser.rowCount;
    }catch(err){
        console.log(err);
    }
}