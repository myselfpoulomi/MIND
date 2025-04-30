import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/WellnessTaskController.js';

const router = express.Router();

// Temporary middleware to simulate authentication
const protect = (req, res, next) => {
  // 👇 Use a valid ObjectId here!
  req.user = { id: '6630e5f7f11f5ae8912c3456' }; // Replace with a real ObjectId from your DB
  next();
};

router.use(protect);

router.get('/', getTasks);
router.post('/createTask', createTask);             // Changed to RESTful endpoint
router.put('/updateTask/:id', updateTask);           // Changed to RESTful endpoint
router.delete('/deleteTask/:id', deleteTask);        // Changed to RESTful endpoint

export default router;
