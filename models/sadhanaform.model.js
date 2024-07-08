import mongoose from 'mongoose';
import User from './user.model.js';

const { Schema } = mongoose;

const SadhanaFormSchema = new Schema({
  chooseOption: {
    type: Map, // Use Map for flexible JSON-like structure
    of: String,
    default: {}
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  points: {
    type: Number, // Use Number instead of Integer
    default: 0
  }
}, { timestamps: true });

const SadhanaForm = mongoose.model('SadhanaForm', SadhanaFormSchema);

export default SadhanaForm;
