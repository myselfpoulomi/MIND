import Song from '../models/SongSchema.js';

// Get all songs
export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get songs by playlist
export const getSongsByPlaylist = async (req, res) => {
  try {
    const songs = await Song.find({ playlist: req.params.playlistId }).sort('title');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single song by ID
export const getSongById = async (req, res) => {
  try {
    const song = await Song.findOne({ id: req.params.id });
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new song
export const createSong = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a song
// Update a song by MongoDB ObjectId
export const updateSong = async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedSong) return res.status(404).json({ message: 'Song not found' });
    res.json(updatedSong);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Delete a song
// Delete a song by MongoDB ObjectId
export const deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) return res.status(404).json({ message: 'Song not found' });
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

