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

export const fetchGoogleToken= async(refreshToken)=>{
    try{
        const userAccessToken=await pool.query(
            "SELECT user_google_token FROM pigeondb WHERE user_refresh_token = $1 ",
            [refreshToken]
        )

        return userAccessToken.rows[0].user_google_token;
    }catch(err){
        console.log(err);
        return 0;
    }
}