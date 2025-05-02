import mongoose from 'mongoose';

const MeditationYogaSessionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['meditation', 'yoga'],
  },
  category: {
    type: [String],
    default: [],
  },
  duration_minutes: {
    type: Number,
    required: true,
    min: 1,
  },
  media_url: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const MeditationYogaSession = mongoose.model('MeditationYogaSession', MeditationYogaSessionSchema);

export default MeditationYogaSession;
