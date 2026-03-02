import {Router} from "express"
import { handleUserAuth } from "../controller/promptHandler.js";

const router= Router();

router.post("/", handleUserAuth);
// router.get("/mail", handlePromptToMail);

export default router;