// server/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes.js'; // User routes
import MoodRoutes from './routes/MoodRoutes.js'; // Added MoodLog routes
import MeditationYogaSessionRoutes from './routes/MeditationYogaSessionRoutes.js'
import PlaylistRoutes from './routes/PlaylistRoutes.js'
import WellnessTaskRoutes from './routes/WellnessTaskRoutes.js'
import professionalRoutes from './routes/ProfessionalRoutes.js'
import chatSupportRoutes from './routes/ChatSupportRoutes.js'
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
app.use('/api/sessions', MeditationYogaSessionRoutes); 
app.use('/api/playlists', PlaylistRoutes);
app.use('/api/tasks', WellnessTaskRoutes);
app.use('/api/professionals', professionalRoutes);
app.use('/api/chat', chatSupportRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
