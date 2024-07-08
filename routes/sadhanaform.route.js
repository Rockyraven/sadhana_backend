import express from 'express';
import { createSadhanaForm } from '../controllers/sadhanaform.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();


router.post("/sadhana", verifyToken, createSadhanaForm);

export default router;