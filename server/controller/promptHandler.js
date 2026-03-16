import { fetchGoogleToken } from "../model/fetchUserToken.js";
import { mailContentGenerator } from "./genAiHanlder.js";
import { mailGenenrator } from "./mailGenerationHandler.js";

export const handleUserAuth=async(req, res)=>{
    const userRefreshToken=req.cookies.pigonRT;
    const userGoogleToken= await fetchGoogleToken(userRefreshToken);
    let mailStatus;
    if (userGoogleToken!=0){
        const promptText=req.body.promptInput;
        const mailContent = await mailContentGenerator(promptText);

        mailStatus= await mailGenenrator(userGoogleToken, mailContent.mailBody, mailContent.receiver);

    }else{
        //improvee this shit
        res.json({"sendingStatus":"404"});
    }
    res.json({"sendingStatus": mailStatus});
}