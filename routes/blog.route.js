import express from 'express';

const router = express.Router();
import {createBlog, getAllBlog} from "../controllers/blog.controller.js"
 
router.get('/blog', getAllBlog);
router.post('/blog', createBlog);

export default router;
