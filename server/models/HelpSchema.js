import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true }
});

const SupportGroupSchema = new Schema({
  name: { type: String, required: true },
  schedule: { type: String, required: true }, // e.g., "Tuesdays at 7:00 PM"
  mode: { type: String, enum: ['Online', 'Offline'], default: 'Online' }
});

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const HelpSchema = new Schema({
  mentalHealthArticles: [ArticleSchema],
  supportGroups: [SupportGroupSchema],
  recommendedBooks: [BookSchema]
});

const Help = model('Help', HelpSchema);

export default Help;
