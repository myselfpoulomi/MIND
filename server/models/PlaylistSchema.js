import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Optional: Embedded track schema
const TrackSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number }, // in seconds
  album: { type: String }
}, { _id: false });

const PlaylistSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: {
    type: String,
    enum: ['relaxation', 'focus', 'sleep', 'exercise', 'party', 'meditation'],
    required: true
  },
  description: { type: String },
  tracks: [{
    type: Schema.Types.Mixed,
    validate: {
      validator: function (value) {
        return typeof value === 'string' || (
          typeof value === 'object' &&
          value.id && value.title && value.artist
        );
      },
      message: 'Each track must be a string ID or an object with id, title, and artist'
    }
  }],
  cover_image_url: { type: String, required: true }
});

const Playlist = model('Playlist', PlaylistSchema);
export default Playlist;
