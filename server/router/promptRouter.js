import {Router} from "express"
import { handleMailContent, handleMailTransfer } from "../controller/promptHandler.js";

const router= Router();

router.post("/", handleMailContent);
router.post("/mail", handleMailTransfer);

export default router;