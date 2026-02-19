import pool from "../config/pgModel.js";

export const dbAddUserHandler= async(name, password)=>{
    try{
        await pool.query(
            "INSERT INTO tiral (user_name, user_password) VALUES ($1, $2)",
            [name, password]
        )
    }catch(err){
        console.log(err);
    }
}