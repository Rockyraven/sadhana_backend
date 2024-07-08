import MCQ from "../models/MCQ.model.js";
import User from "../models/user.model.js";




export const createMCQ = async (req, res) => {
    const { MCQs } = req.body;
    // console.log(MCQs);

    // Validate input
    if (!Array.isArray(MCQs) || MCQs.length === 0) {
        return res.status(400).json({ message: "Invalid input. 'MCQs' should be a non-empty array." });
    }

    // Validate each MCQ object
    // for (const mcq of MCQs) {
    //     console.log(mcq, mcq.options.length);
    //     if (!mcq.question || !Array.isArray(mcq.options) || mcq.options.length < 2 || mcq.answer === undefined) {
    //         return res.status(400).json({ message: "Each MCQ should have a question, an array of at least 2 options, and a correctOption index." });
    //     }
    // }

    try {
        // Insert multiple MCQs into the database
        const createdMCQs = await MCQ.insertMany(MCQs);

        // Send success response
        res.status(201).json({ message: "MCQs created successfully", data: createdMCQs });
    } catch (error) {
        console.error('Error creating MCQs:', error);

        // Handle known MongoDB errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: "Validation error", details: error.message });
        }

        // Handle any other errors
        res.status(500).json({ message: "Something went wrong" });
    }
};


export const getAllMCQ = async (req, res) => {
    try {
        const allmcq = await MCQ.find({});
        res.status(200).json({ data: allmcq, status: "success" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
    }
}



export const submitMCQHandler = async (req, res) => {
    const { points } = req.body;
    
    try {
        // Fetch the user by their ID from the request object
        const user = await User.findById(req.user.id);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update the user's points and test status
        user.points = points;
        user.isTestGiven = true;

        // Save the updated user document to the database
        await user.save();

        // Respond with a success message and the updated user data
        return res.status(200).json({ message: "Points updated successfully", user });
    } catch (error) {
        // Log the error to the console for debugging
        console.error("Error updating points:", error);

        // Respond with a generic error message
        return res.status(500).json({ message: "Something went wrong" });
    }
};

