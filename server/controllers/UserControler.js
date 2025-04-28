// controllers/UserControler.js

import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

// Get user by ID
const getUsersbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
};

// Add a new admin/user (Sign Up)
const addUser = async (req, res) => {
  const { email, password, currentPassword } = req.body;

  if (!email || !password || !currentPassword) {
    return res.status(400).json({ message: "Email, password and current password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedCurrentPassword = await bcrypt.hash(currentPassword, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      currentPassword: hashedCurrentPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User added successfully", newUser });
  } catch (error) {
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
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "your_jwt_secret_key", { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params; // get id from URL
  
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
    const { id } = req.params; // id from URL
    const { email, password, currentPassword } = req.body; // fields from body
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { email, password, currentPassword },
        { new: true }
      );
  
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
  
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Failed to update user", error });
    }
  };
  

export { getAllUsers, getUsersbyId, addUser, loginUser, deleteUser, updateUser };
