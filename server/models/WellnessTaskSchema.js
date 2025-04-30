import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const wellnessTaskSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const WellnessTask = model('WellnessTask', wellnessTaskSchema);

export default WellnessTask;
