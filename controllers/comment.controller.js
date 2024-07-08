import Comment from '../models/comment.model.js'
import User from '../models/user.model.js';

export const getQuestions = async (req, res) => {
    try {
      const questions = await Comment.find()
        .populate('userId', 'name email image createdAt') // Populate user information for the questions
        .populate('comments.userId', 'name email image createdAt'); // Populate user information for each nested comment
  
      if (!questions || questions.length === 0) {
        return res.status(404).json({ success: false, message: "No questions found" });
      }
  
      return res.status(200).json({ 
        success: true, 
        data: questions 
      });
    } catch (error) {
      console.error('Error fetching questions:', error);
      return res.status(500).json({ success: false, message: "Something went wrong" });
    }
  };


export const createQuestion = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: "Title is required" });
  }

  try {
    const question = new Comment({ title, userId: req.user.id, comments: [] });
    const savedQuestion = await question.save();
    
    return res.status(201).json({ 
      success: true, 
      message: "Question created successfully", 
      data: savedQuestion 
    });
  } catch (error) {
    console.error('Error creating question:', error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
}
};

export const createComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
      const question = await Comment.findById(id);

      console.log(id, text, question, req.user.id);
      
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
      
      const newComment = { text: ans, userId: req.user.id };
      // console.log(newComment)
      question.comments.push(newComment);

      await question.save();

      res.status(200).json({ message: "Comment successfully added", comment: newComment });
  } catch (error) {
      return res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
