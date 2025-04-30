import Playlist from '../models/PlaylistSchema.js'

// Create a new playlist
export const createPlaylist = async (req, res) => {
  try {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all playlists
export const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a playlist by ID
export const getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findOne({ id: req.params.id });
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json(playlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a playlist by ID
export const updatePlaylist = async (req, res) => {
  try {
    const updated = await Playlist.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a playlist by ID
export const deletePlaylist = async (req, res) => {
  try {
    const deleted = await Playlist.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Playlist not found' });
    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
