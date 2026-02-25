import { Router } from "express";
import { handleAddUser } from "../controller/signInHandlers.js";

const router=Router();

router.post("/", handleAddUser);

export default router;