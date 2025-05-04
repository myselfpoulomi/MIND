import WellnessTask from '../models/WellnessTaskSchema.js';

// Get all tasks for a user
export const getTasks = async (req, res) => {
  try {
    const userId = req.user.id; // provided by protect middleware

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const tasks = await WellnessTask.find({ user_id:userId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
};



// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title,userId } = req.body;
    console.log(req.body)
    const newTask = new WellnessTask({
      title,
      completed: false,
      user_id: userId,
    });
    await newTask.save();
    console.log(newTask)
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error creating task", error: err.message });
  }
};


// Update a task
export const updateTask = async (req, res) => {
  const userId = req.user?.id || req.body.userId || req.query.userId || req.headers['x-user-id'];
  try {
    const updated = await WellnessTask.findOneAndUpdate(
      { _id: req.params.id, user_id: userId },
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error: err.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  const userId = req.user?.id || req.body.userId || req.query.userId || req.headers['x-user-id'];
  try {
    const deleted = await WellnessTask.findOneAndDelete({
      _id: req.params.id,
      user_id: userId,
    });
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", error: err.message });
  }
};
