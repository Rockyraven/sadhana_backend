import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number, // Changed to Number for consistency
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ["male", "female", "other"]
    },
    role: {
      type: String,
      enum: ["admin", "user", "master"],
      default: "user" 
    },
    marital: {
      type: String,
      enum: ["married", "unmarried"],
      default: "unmarried" 
    },
    dateOfAnniversary: {
      type: Date,
    },
    dateOfBirth: {
      type: Date,
    },
    points: {
      type: Number,
      default:0,
    },
    profilePicture: {
      type: String,
      default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
    otp: {
      type: String, // Added otp field for verification
    },
    isTestGiven: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;


