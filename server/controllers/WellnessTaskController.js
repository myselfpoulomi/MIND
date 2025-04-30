import WellnessTask from '../models/WellnessTaskSchema.js';

// Get all tasks for a user
const getTasks = async (req, res) => {
  try {
    const tasks = await WellnessTask.find({ user_id: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Get Tasks Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const task = await WellnessTask.create({
      user_id: req.user.id,
      title,
      completed: false,
    });
    res.status(201).json(task);
  } catch (error) {
    console.error('Create Task Error:', error);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await WellnessTask.findOneAndUpdate(
      { _id: id, user_id: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.status(200).json(task);
  } catch (error) {
    console.error('Update Task Error:', error);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await WellnessTask.findOneAndDelete({
      _id: id,
      user_id: req.user.id
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    console.error('Delete Task Error:', error);
    res.status(500).json({ message: 'Failed to delete task' });
  }
};

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
