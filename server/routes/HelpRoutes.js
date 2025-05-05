import express from 'express';
import {
  getHelpData,
  createHelpData,
  updateHelpData,
  deleteHelpData
} from '../controllers/HelpController.js';

const router = express.Router();

router.get('/', getHelpData);           // GET all help data
router.post('/createHelpData', createHelpData);       // Create new help data
router.put('/updateHelpData/:id', updateHelpData);     // Update help data by ID
router.delete('/deleteHelpData/:id', deleteHelpData);  // Delete help data by ID

export default router;
