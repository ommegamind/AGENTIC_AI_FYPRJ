import { dbAddUserHandler, dbRemoveUserHandler } from "../model/addUserModel.js";
import { tokenHandler } from "./tokenHandler.js";
import crypto from "crypto";
import {google} from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);//i can export it from another file to all the places that need it,

// export const userGooglAuth=(req, res)=>{
//     const scopes = [
//         "https://www.googleapis.com/auth/gmail.send",
//     ];

//     const state = crypto.randomBytes(32).toString('hex');
//     req.session.state=state;

//     const authorizationUrl = oauth2Client.generateAuthUrl({
//         access_type: 'online',
//         scope: scopes,
//         include_granted_scopes: true,
//         state: state
//     });

//     res.redirect(authorizationUrl);
// }

//Deployment google user auth 
import jwt from "jsonwebtoken";

export const userGooglAuth = (req, res) => {
    const scopes = ["https://www.googleapis.com/auth/gmail.send"];

    const state = crypto.randomBytes(32).toString('hex');
    
    // Sign the state into a JWT instead of a cookie
    const signedState = jwt.sign({ state }, process.env.JWT_PRIVATE, { expiresIn: "5m" });

    const authorizationUrl = oauth2Client.generateAuthUrl({
        access_type: 'online',
        scope: scopes,
        include_granted_scopes: true,
        state: signedState  // send the signed JWT as state
    });

    res.redirect(authorizationUrl);
};




// export const authScreenHandler =async(req, res)=>{
//     const {state, code, error}=req.query;

//     if(error){
//         res.end(`we encountered: ${error}`)
//     }
//     else if(state!==req.session.state){
//         console.log('State mismatch. Possible CSRF attack');
//         res.end('State mismatch. Possible CSRF attack');
//     }  else{
//     const { tokens } = await oauth2Client.getToken(code);
    
//     const {accessToken, refreshToken}=tokenHandler(tokens.access_token);

//     dbAddUserHandler(tokens.access_token, refreshToken);

//     res.cookie("pigonAT", accessToken,{
//         httpOnly: true,
//         sameSite: "none",
//         secure: true,
//         path:"/"
//     });
//     res.cookie("pigonRT", refreshToken,{
//         httpOnly: true,
//         sameSite: "none",
//         secure: true,
//         path:"/"
//     })

//     res.redirect("https://clientcerbi.vercel.app/prompt-page");
//   }

// }

// deployment auth screen handler 
export const authScreenHandler = async (req, res) => {
    console.log("🔥 FULL URL:", req.protocol + '://' + req.get('host') + req.originalUrl);
    console.log("🔥 ALL QUERY:", JSON.stringify(req.query));
    console.log("🔥 RAW URL:", req.url);
    const { state, code, error } = req.query;

    console.log("🔥 authScreen HIT");
    console.log("Query params:", req.query);

    if (error) {
        console.log("OAuth error:", error);
        return res.end(`we encountered: ${error}`);
    }

    if (!code) {
        console.log("❌ No code received");
        return res.end("No code received");
    }

    if (!state) {
        console.log("❌ No state received");
        return res.end("No state received");
    }

    // Verify the signed state JWT instead of comparing cookies
    try {
        jwt.verify(state, process.env.JWT_PRIVATE);
        console.log("✅ State verified");
    } catch (err) {
        console.log("❌ State invalid/expired:", err.message);
        return res.end("State mismatch. Possible CSRF attack");
    }

    let tokens;
    try {
        const response = await oauth2Client.getToken(code);
        tokens = response.tokens;
        console.log("✅ Tokens received");
    } catch (err) {
        console.error("❌ Token exchange failed:", err);
        return res.end("OAuth failed");
    }

    if (!tokens?.access_token) {
        console.log("❌ No access token received");
        return res.end("No access token");
    }

    const { accessToken, refreshToken } = tokenHandler(tokens.access_token);

    try {
        await dbAddUserHandler(tokens.access_token, refreshToken);
        console.log("✅ DB updated");
    } catch (err) {
        console.error("❌ DB error:", err);
    }

    res.cookie("pigonAT", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/"
    });

    res.cookie("pigonRT", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/"
    });

    console.log("✅ Cookies set");

    res.send(`
        <script>
            window.location.replace("https://clientcerbi.vercel.app/prompt-page");
        </script>
    `);
};

export const handleRemoveUser = async (req, res) => {
    const refreshToken = req.cookies.pigonRT;

    const removeResponse = await dbRemoveUserHandler(refreshToken);
    console.log(`remove response: ${removeResponse}`);

    if (removeResponse) {
        res.cookie("pigonRT", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/"
        });

        res.cookie("pigonAT", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/"
        });
    }

    return res.status(200).json({ logout: true });
};
