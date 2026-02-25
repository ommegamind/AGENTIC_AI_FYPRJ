import jwt from "jsonwebtoken"
import { fetchUserToken } from "../model/fetchUserToken.js";

export const cookieGetHandle=async(req, res)=>{
    const accessToken=req.cookies.pigonAT;
    // console.log(`server at: ${accessToken}`);
    let response={
        access:false
    }
    let newToken=false;
    let useNewToken;

    if(accessToken){
        try{
            const user_data=jwt.verify(accessToken, process.env.JWT_PRIVATE);
            console.log(user_data);
            response ={
                access: true,
                data: user_data
            }
        }catch(err){
            const refreshToken=req.cookies.pigonRT;
            try{
                const user_data=jwt.verify(refreshToken, process.env.JWT_PRIVATE);
                const refreshCheck= await fetchUserToken(refreshToken);
                if(refreshCheck){
                    const accessToken = jwt.sign({data: user_data}, process.env.JWT_PRIVATE, {expiresIn: '15s'})

                    newToken=true;
                    useNewToken=accessToken

                    response = {
                        access: true,
                        data: user_data
                    }
                }
            }catch(err){
                res.json(response);
            }
        }
        
    }else{
        console.log("NO TOKEN");
    }
    if(newToken){
            res.cookie("pigonAT", useNewToken,{
                httpOnly:true,
                sameSite:"lax",
                path:"/"
                });
    }

    res.json(response);
}