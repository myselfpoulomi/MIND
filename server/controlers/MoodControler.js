import MoodLog from '../modules/moodLogSchema.js';

// Create a new mood log
 const createMoodLog = async (req, res) => {
    try {
        const { user_id, mood } = req.body;

        const newMoodLog = new MoodLog({
            user_id,
            mood
        });

        await newMoodLog.save();
        res.status(201).json(newMoodLog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating mood log', error: error.message });
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