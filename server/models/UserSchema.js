import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentPassword: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["basic", "premium"],
    default: "basic",
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
