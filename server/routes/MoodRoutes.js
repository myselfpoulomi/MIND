import express from 'express';
import { createMoodLog, getMoodLogs, getMoodLogById } from '../controllers/MoodControler.js';

const router = express.Router();

// Route to create a new mood log
router.post('/addMood', createMoodLog);

// Route to get all mood logs for a specific user
router.get('/:user_id', getMoodLogs);

// Route to get a specific mood log by ID
router.get('/log/:id', getMoodLogById);

export default router;
