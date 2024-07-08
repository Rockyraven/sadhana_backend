import mongoose, { Schema } from "mongoose";
// import User from "./user.model"; // Ensure this path is correct

const MasterSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  subusers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  }
}, { timestamps: true });

const Master = mongoose.model("Master", MasterSchema);

export default Master;
