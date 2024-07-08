import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import blogRoutes from './routes/blog.route.js';
import MCQRoutes from './routes/MCQ.route.js';
import commentRouter from './routes/comment.route.js'
import eventRouter from './routes/event.route.js'
import sadhanaFormRouter from './routes/sadhanaform.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    console.log(process.env.MONGO);
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json') // api for the get request
//     .then(response => response.json())
//     .then(data => console.log(data));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comment', commentRouter);
app.use('/api', blogRoutes);
app.use("/api/mcq", MCQRoutes);
app.use("/api/", eventRouter);
app.use("/api", sadhanaFormRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
