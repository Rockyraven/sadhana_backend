import mongoose from 'mongoose';
import User from './user.model.js';
const chatSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            required: true,
            trim: true
        },
        photo: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
