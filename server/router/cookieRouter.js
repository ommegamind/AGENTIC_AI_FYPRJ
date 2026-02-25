import { Router } from "express";
import { cookieGetHandle } from "../controller/cookieHandlers.js";

const router=Router();

router.get("/", cookieGetHandle )

export default router;