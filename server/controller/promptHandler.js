import { fetchGoogleToken } from "../model/fetchUserToken.js";
import { mailContentGenerator } from "./genAiHanlder.js";
import { mailGenenrator } from "./mailGenerationHandler.js";

export const handleUserAuth=async(req, res)=>{
    const userRefreshToken=req.cookies.pigonRT;
    console.log("promt hanlder server ref token: ", userRefreshToken);
    const userGoogleToken= await fetchGoogleToken(userRefreshToken);
    console.log("prompt handler server: ", userGoogleToken);
    if (userGoogleToken!=0){
        //handle user
        const promptText=req.body.promptInput;
        const mailContent = await mailContentGenerator(promptText);
        await mailGenenrator(userGoogleToken, mailContent);

    }else{
        //redirect user
        return(0);
    }
}