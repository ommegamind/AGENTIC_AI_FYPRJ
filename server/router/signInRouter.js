import { Router } from "express";
import { handleAddUser, handleRemoveUser } from "../controller/signInHandlers.js";

const router=Router();

router.post("/", handleAddUser);
router.get("/logout", handleRemoveUser);

export default router;