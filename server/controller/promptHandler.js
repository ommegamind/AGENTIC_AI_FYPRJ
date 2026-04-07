import { fetchGoogleToken } from "../model/fetchUserToken.js";
import { mailContentGenerator } from "./genAiHanlder.js";
import { mailGenenrator } from "./mailGenerationHandler.js";

export const handleMailContent=async(req, res)=>{
    const userRefreshToken=req.cookies.pigonRT;
    const userGoogleToken= await fetchGoogleToken(userRefreshToken);
    if (userGoogleToken!=0){
        const promptText=req.body.promptInput;
        const mailContent = await mailContentGenerator(promptText);

        res.json({
            sendingStatus: 200,
            mailBody: mailContent.mailBody,
            mailReceiver: mailContent.receiver,
            mailSubject: mailContent.subject
        });

    }else{
        //improvee this shit
        res.json({"generationStatus":"404"});
    }
}

export const handleMailTransfer = async (req, res) => {
  try {
    const userRefreshToken = req.cookies.pigonRT;
    const userGoogleToken = await fetchGoogleToken(userRefreshToken);

    if (!userGoogleToken) {
      return res.json({ sendingStatus: 401 });
    }

    const mailContents = req.body.mailSendingBody;
    const receivers = req.body.mailSendingReceiver;
    const subject = req.body.mailSendingSubject;

    const mailStatus = await mailGenenrator(
      userGoogleToken,
      mailContents,
      receivers,
      subject
    );

    return res.json({
      sendingStatus: 200,
      result: mailStatus
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ sendingStatus: 500 });
  }
};