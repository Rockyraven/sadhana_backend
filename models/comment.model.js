import mongoose from 'mongoose';
import User from './user.model.js';

// Define the comment schema
const commentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    comments: [
      {
        text: {
          type: String,
          required: true,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: User,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// Create the comment model
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
