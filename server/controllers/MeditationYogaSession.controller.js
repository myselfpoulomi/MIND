import MeditationYogaSession from '../models/MeditationYogaSession.model.js';

// Create a new session
 const createSession = async (req, res) => {
  try {
    const newSession = new MeditationYogaSession(req.body);
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sessions
 const getAllSessions = async (req, res) => {
  try {
    const sessions = await MeditationYogaSession.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single session by ID
 const getSessionById = async (req, res) => {
  try {
    const session = await MeditationYogaSession.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a session
 const updateSession = async (req, res) => {
  try {
    const updatedSession = await MeditationYogaSession.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSession) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json(updatedSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a session
 const deleteSession = async (req, res) => {
  try {
    const deletedSession = await MeditationYogaSession.findByIdAndDelete(req.params.id);
    if (!deletedSession) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {createSession,getAllSessions,getSessionById,updateSession,deleteSession}
