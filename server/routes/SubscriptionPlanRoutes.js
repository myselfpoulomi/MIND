import express from 'express';
import {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan
} from '../controllers/SubscriptionPlanController.js';

const router = express.Router();

// Routes
router.get('/', getAllPlans);
router.get('/:id', getPlanById);
router.post('/createPlan', createPlan);
router.put('/updatePlan/:id', updatePlan);
router.delete('/deletePlan/:id', deletePlan);

export default router;
