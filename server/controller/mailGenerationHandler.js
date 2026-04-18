import {google} from "googleapis";
import dotenv from "dotenv"

dotenv.config({path: "../.env"});

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

export const mailGenenrator=async(userGoogleToken, mailBody, mailReceiver, mailSubject, mailcc, mailbcc)=>{
    oauth2Client.setCredentials({access_token: userGoogleToken});
    const setGmail = google.gmail({version: 'v1', auth:oauth2Client});

    const emailLines = [
        `To: ${mailReceiver}`,
        `Cc: ${mailcc}`,//check this shit
        `Bcc: ${mailbcc}`,//thissss toooo
        'Content-Type: text/plain; charset=UTF-8',
        'MIME-Version: 1.0',
        `Subject:${mailSubject}`,
        '',
        `${mailBody}`
    ];

    const email = emailLines.join('\r\n').trim();
    // const email = emailLines.join().trim();
    const base64Email = Buffer.from(email).toString('base64');

    const finallySent =await setGmail.users.messages.send({
        userId: 'me',
        requestBody: {
        raw: base64Email
        }
    });
    
    return finallySent.status;
}