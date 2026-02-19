import { Router } from "express";

const router=Router();

router.post("/",async (req,res)=>{
    const {user_name, user_password}= await(req.body);
    console.log(user_name,user_password);
})

export default router;