// server/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes.js'; // User routes
import MoodRoutes from './routes/MoodRoutes.js'; // Added MoodLog routes
import meditationYogaSessionRoutes from './routes/MeditationYogaSessionRoutes.js'
import playlistRoutes from './routes/PlaylistRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Update when deploying
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use("/api/user", UserRoutes); // User routes
app.use("/api/moodlogs", MoodRoutes); // Added MoodLog routes
app.use('/api/sessions', meditationYogaSessionRoutes); 
app.use('/api/playlists', playlistRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
