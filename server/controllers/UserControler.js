import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

// Get user by ID
const getUsersbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
};

// Add a new user (Sign Up)
const addUser = async (req, res) => {
  const { email, password, confirmPassword, currentPassword } = req.body;

  if (!email || !password || !confirmPassword || !currentPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedCurrentPassword = await bcrypt.hash(currentPassword, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      currentPassword: hashedCurrentPassword,
      userType: "basic", // optional due to schema default
    });

    await newUser.save();

    res.status(201).json({
      message: "User added successfully",
      user: { id: newUser._id, email: newUser.email, userType: newUser.userType },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Failed to add user", error });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      userId: user._id,
      userType: user.userType, // ✅ Include userType in login response
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, userType } = req.body;

  try {
    const updateData = {};
    if (email) updateData.email = email;
    if (userType) updateData.userType = userType;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).select("-password");

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

const upgradeUserToPremium = async (req, res) => {
  const { userId, userType, razorpayPaymentId, billingCycle } = req.body;

  if (!userId || !userType || !razorpayPaymentId || !billingCycle) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { userType },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: `User upgraded to ${userType}.`,
      user,
    });
  } catch (error) {
    console.error("Upgrade error:", error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};



export {
  getAllUsers,
  getUsersbyId,
  addUser,
  loginUser,
  deleteUser,
  updateUser, 
  upgradeUserToPremium
};
