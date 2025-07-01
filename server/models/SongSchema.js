import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SongSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number }, // in seconds
  album: { type: String },
  audio_url: { type:String } ,
  playlist: {
    type: String,
    required: true,
    enum: ['relaxation', 'focus', 'sleep'],
    index: true
  },
  cover_image_url: { type: String } // Optional for songs, if needed
});

const Song = model('Song', SongSchema);
export default Song;
