import User from "../models/user.model.js";
import Chat from "../models/chat.model.js";

import { errorHandler } from "../utils/error.js";

export const chatroom = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can delete only your account!'));
    }
    try {
        const id = req.params.id;
        const user = await User.findById(id); // Pass the id directly
        console.log("user-->", user);

        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }

        const { message } = req.body;
        const newChat = new Chat({ message, photo: user.profilePicture, name: user.name,userId:id });
        await newChat.save();
        const data = await Chat.find({});

        res.status(200).json({ message: 'User has been messaged...', data: data });

    } catch (error) {
        console.log("aaya tha catch m", error);
        next(error);
    }
};
