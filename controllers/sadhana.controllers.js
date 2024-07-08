import { errorHandler } from "../utils/error.js";
import Sadhana from "../models/sadhana.model.js";

export const sadhanafill = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            return next(errorHandler(401, 'You can delete only your account!'));
        }
        
        console.log("Sadhana controller");
        const userId = req.params.id;
        console.log(req.body);
        const { topic, date, chanting, rounds, interval } = req.body;
        
        const newUser = new Sadhana({ userId, topic, date, chanting, rounds, interval });
        
        try {
            await newUser.save();
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            console.log("Error saving user:", error);
            next(error);
        }

    } catch (error) {
        console.log("Error:", error);
        next(error);
    }
};
