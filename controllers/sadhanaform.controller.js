import SadhanaForm from "../models/sadhanaform.model.js";

// Controller function to create a new SadhanaForm
export const createSadhanaForm = async (req, res) => {
  const { chooseOption, points } = req.body;

  try {
    // Create a new SadhanaForm document
    const newSadhanaForm = new SadhanaForm({
        chooseOption: chooseOption,
      points: points,
      userId: req.user.id
    });

    // Save the document to the database
    const savedSadhanaForm = await newSadhanaForm.save();

    // Respond with the saved document
    res.status(201).json({
      success: true,
      data: savedSadhanaForm,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

