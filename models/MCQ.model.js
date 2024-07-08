import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MCQSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    options: [
      {
        type: String,
        required: true
      }
    ],
    answer: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const MCQ = model("MCQ", MCQSchema);

export default MCQ;
