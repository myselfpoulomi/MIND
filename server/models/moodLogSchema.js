import mongoose from 'mongoose';

// Define the MoodLog schema
const moodLogSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mood: {
        type: String,
        enum: ['happy', 'calm', 'tired', 'anxious', 'sad', 'stressed', 'motivated', 'grateful'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create the model for MoodLog
const MoodLog = mongoose.model('MoodLog', moodLogSchema);

export default MoodLog;
