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