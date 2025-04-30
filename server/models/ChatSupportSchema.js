import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const chatSupportSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // assumes you have a User model
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  sender: {
    type: String,
    enum: ['user', 'assistant'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Optional: virtual ID
chatSupportSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const ChatSupport = model('ChatSupport', chatSupportSchema);

export default ChatSupport;
