// routes/taskRoutes.js

import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/WellnessTaskController.js';

const router = express.Router();

// 🔧 Updated middleware to extract userId from query, body, or headers
const protect = (req, res, next) => {
  const userId =
    (req.body && req.body.userId) ||
    (req.query && req.query.userId) ||
    req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'User ID missing from request.' });
  }

  req.user = { id: userId }; // Attach user info to req object
  next();
};

router.use(protect);

// Routes
router.get('/', getTasks); // userId is expected in query/header/body
 // now expects userId in query param
router.post('/createTask', createTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

export default router;
