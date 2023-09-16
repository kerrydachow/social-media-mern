import express from "express";
import { login, verifyEmail } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/verifyEmail", verifyEmail);

export default router;
