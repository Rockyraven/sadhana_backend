import express from "express";
import { createComment, createQuestion, getQuestions } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/allquestion", getQuestions);
router.post("/question", verifyToken, createQuestion);
router.post("/comment/:id", verifyToken, createComment);

export default router;
