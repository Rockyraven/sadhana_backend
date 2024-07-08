import express from "express";
import { createMCQ, getAllMCQ, submitMCQHandler } from "../controllers/MCQ.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/createmcq", createMCQ);
router.get("/", getAllMCQ);
router.post("/submit", verifyToken, submitMCQHandler)

export default router;