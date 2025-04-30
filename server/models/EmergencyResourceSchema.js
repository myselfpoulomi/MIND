import mongoose from 'mongoose';

// Define schema
const emergencyResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  contact_info: {
    phone: {
      type: String,
      required: false
    },
    website: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    }
  }
}, {
  timestamps: true
});

// Create model
const EmergencyResource = mongoose.model('EmergencyResource', emergencyResourceSchema);

// Export the model
export default mongoose.model('EmergencyResource', emergencyResourceSchema);
