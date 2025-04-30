import express from 'express';
import {
  getChatByUserId,
  postChatMessage,
  deleteChatByUserId
} from '../controllers/ChatSupportController.js';

const router = express.Router();

// Get all messages for a user
router.get('/:userId', getChatByUserId);

// Post a new message
router.post('/postChat', postChatMessage);

// Optional: Delete chat history for a user
router.delete('/deleteChat/:userId', deleteChatByUserId);

export default router;
