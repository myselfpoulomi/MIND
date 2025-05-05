import MoodLog from '../models/moodLogSchema.js';

// Create a new mood log
const createMoodLog = async (req, res) => {
    const { user_id, mood, timestamp } = req.body;
  
    if (!user_id || !mood || !timestamp) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      // Save to DB
      const newMood = new MoodLog({ user_id, mood, timestamp });
      await newMood.save();
  
      console.log("Mood saved:", newMood);
      res.status(200).json({ message: "Mood saved successfully" });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Failed to save mood" });
    }
  };
  

// Get all mood logs for a user
 const getMoodLogs = async (req, res) => {
    try {
        const { user_id } = req.params;
        const moodLogs = await MoodLog.find({ user_id }).sort({ timestamp: -1 });
        res.status(200).json(moodLogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching mood logs', error: error.message });
    }
};

// Get a specific mood log by ID
 const getMoodLogById = async (req, res) => {
    try {
        const { id } = req.params;
        const moodLog = await MoodLog.findById(id);
        
        if (!moodLog) {
            return res.status(404).json({ message: 'Mood log not found' });
        }
        
        res.status(200).json(moodLog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching mood log', error: error.message });
    }
};

export {createMoodLog,getMoodLogs,getMoodLogById}