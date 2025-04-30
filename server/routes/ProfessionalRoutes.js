import express from 'express';
import {
  getAllProfessionals,
  getProfessionalById,
  createProfessional,
  updateProfessional,
  deleteProfessional,
} from '../controllers/ProfessionalController.js';

const router = express.Router();

router.get('/', getAllProfessionals);
router.get('/:id', getProfessionalById);
router.post('/createProfessional', createProfessional);
router.put('/updateProfessional/:id', updateProfessional);
router.delete('/deleteProfessional/:id', deleteProfessional);

export default router;
