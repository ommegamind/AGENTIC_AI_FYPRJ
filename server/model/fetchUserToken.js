import pool from "../config/pgModel.js";

export const fetchUserToken= async(refreshTokenCheck)=>{
    try{
        const userVerification=await pool.query(
            "SELECT 1 FROM trial WHERE user_refresh_token = $1 ",
            [refreshTokenCheck]
        )
        console.log(userVerification.rowCount>0);
        return (userVerification.rowCount>0);
    }catch(err){
        console.log(err);
    }
}