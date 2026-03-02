import { Router } from "express";
import {handleRemoveUser, userGooglAuth } from 
"../controller/signInHandlers.js";

const router=Router();

router.get("/logout", handleRemoveUser);

router.get("/check", userGooglAuth)

export default router;