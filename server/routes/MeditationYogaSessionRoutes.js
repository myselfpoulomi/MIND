import express from 'express';
import {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
} from '../controllers/MeditationYogaSession.controller.js';

const router = express.Router();

// Routes
router.post('/createSession', createSession);
router.get('/', getAllSessions);
router.get('/:id', getSessionById);
router.put('/updateSession/:id', updateSession);
router.delete('/deleteSession/:id', deleteSession);

export default router;
