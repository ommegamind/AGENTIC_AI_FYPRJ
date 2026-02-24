import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({path: "../.env"});

export const tokenHandler=(userData)=>{

    const accessToken = jwt.sign({
        data: userData
        }, process.env.JWT_PRIVATE, {expiresIn: '15m'})

    const refreshToken = jwt.sign({
            data: userData
        }, process.env.JWT_PRIVATE)

    return {accessToken, refreshToken}

}


