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
export const userGooglAuth = (req, res) => {
    const scopes = [
        "https://www.googleapis.com/auth/gmail.send",
    ];

    const state = crypto.randomBytes(32).toString('hex');

    res.cookie("oauth_state", state, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        maxAge: 5 * 60 * 1000
    });

    const authorizationUrl = oauth2Client.generateAuthUrl({
        access_type: 'online',
        scope: scopes,
        include_granted_scopes: true,
        state: state
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
    const { state, code, error } = req.query;

    const storedState = req.cookies.oauth_state;

    if (error) {
        return res.end(`we encountered: ${error}`);
    }

    if (!state || state !== storedState) {
        console.log('State mismatch. Possible CSRF attack');
        return res.end('State mismatch. Possible CSRF attack');
    }

    // ✅ clear after verification
    res.clearCookie("oauth_state", {
        path: "/",
        sameSite: "none",
        secure: true
    });

    const { tokens } = await oauth2Client.getToken(code);

    const { accessToken, refreshToken } = tokenHandler(tokens.access_token);

    dbAddUserHandler(tokens.access_token, refreshToken);

    res.cookie("pigonRT", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/",
        domain: ".onrender.com"
    });

    res.cookie("pigonRT", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/",
        domain: ".onrender.com"
    });

    // res.redirect("https://clientcerbi.vercel.app/prompt-page");
    //deployment fix 
    res.send(`
        <script>
            window.location.href = "https://clientcerbi.vercel.app/prompt-page";
        </script>
    `);
};



export const handleRemoveUser=async(req, res)=>{
    const refreshToken=req.cookies.pigonRT;
    const removeResponse =await dbRemoveUserHandler(refreshToken);
    console.log(`remove response: ${removeResponse}`);
    if(removeResponse){
        // res.cookie("pigonRT", "",{
        //     httpOnly: true,
        //     sameSite: "none",
        //     secure: true,
        //     path:"/"
        // });
        // res.cookie("pigonAT", "",{
        //     httpOnly: true,
        //     sameSite: "none",
        //     secure: true,
        //     path:"/"
        // });
        res.cookie("pigonRT", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/",
            domain: ".onrender.com"
        });
        res.cookie("pigonRT", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/",
            domain: ".onrender.com"
        });
    }
    return res.status(200).json({ logout: true });

}