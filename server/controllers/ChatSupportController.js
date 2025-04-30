import ChatSupport from '../models/ChatSupportSchema.js';

// Get all chat messages for a user
export const getChatByUserId = async (req, res) => {
  try {
    const messages = await ChatSupport.find({ user_id: req.params.userId }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Post a new chat message
export const postChatMessage = async (req, res) => {
  try {
    const { user_id, message, sender } = req.body;

    if (!user_id || !message || !sender) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const chatMessage = new ChatSupport({
      user_id,
      message,
      sender,
    });

    await chatMessage.save();
    res.status(201).json(chatMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete all messages for a user (optional)
export const deleteChatByUserId = async (req, res) => {
  try {
    await ChatSupport.deleteMany({ user_id: req.params.userId });
    res.json({ message: 'Chat history cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
