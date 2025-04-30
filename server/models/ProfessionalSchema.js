import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const professionalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },
  available_slots: {
    type: [Date], // optional: array of available time slots
    default: [],
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  photo_url: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true, // adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

professionalSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const Professional = model('Professional', professionalSchema);

export default Professional;
