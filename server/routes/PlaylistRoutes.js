import express from 'express';
import {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist
} from '../controllers/PlaylistController.js';

const router = express.Router();

router.post('/createPlaylist', createPlaylist);
router.get('/', getPlaylists);
router.get('/:id', getPlaylistById);
router.put('/updatePlaylist/:id', updatePlaylist);
router.delete('/deletePlaylist/:id', deletePlaylist);

export default router;
