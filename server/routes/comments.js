import express from "express";
import { createComment, getPostComments, likeComment } from "../controllers/comments.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyToken, createComment);

/* READ */
router.get("/:postId", verifyToken, getPostComments);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeComment);

export default router;
