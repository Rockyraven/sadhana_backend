import express from 'express';
import { createEvent, getAllEvent } from '../controllers/event.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/event', verifyToken, getAllEvent);
router.post('/event', verifyToken, createEvent);

export default router;
