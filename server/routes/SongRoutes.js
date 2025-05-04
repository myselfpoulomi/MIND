import express from 'express';
import {
  getAllSongs,
  getSongsByPlaylist,
  getSongById,
  createSong,
  updateSong,
  deleteSong
} from '../controllers/songController.js';

const router = express.Router();

router.get('/', getAllSongs);
router.get('/playlist/:playlistId', getSongsByPlaylist);
router.get('/:id', getSongById);
router.post('/createSong', createSong);
router.put('/updateSong/:id', updateSong);
router.delete('/deleteSong/:id', deleteSong);

export default router;
