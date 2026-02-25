import jwt from "jsonwebtoken"

export const cookieGetHandle=(req, res)=>{
    const accessToken=req.cookies.pigonAT;
    // console.log(`server at: ${accessToken}`);
    let response={
        access:false
    }
    if(accessToken){
        const user_data=jwt.verify(accessToken, process.env.JWT_PRIVATE);
        console.log(user_data);
        response ={
            access: true,
            data: user_data
        }
    }else{
        console.log("chorr");
    }
    res.json(response);
}