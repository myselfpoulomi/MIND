import express from 'express';
import {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource
} from '../controllers/EmergencyResourceController.js';

const router = express.Router();

// Routes 


router.get('/', getAllResources);
router.get('/:id', getResourceById);
router.post('/createResource', createResource);
router.put('/updateResource/:id', updateResource);
router.delete('/deleteResource/:id', deleteResource);

export default router;
