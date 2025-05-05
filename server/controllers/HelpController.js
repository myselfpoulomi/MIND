import Help from '../models/HelpSchema.js';

// GET all help data
export const getHelpData = async (req, res) => {
  try {
    const help = await Help.find();
    res.status(200).json(help);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new help data
export const createHelpData = async (req, res) => {
  try {
    const newHelp = new Help(req.body);
    await newHelp.save();
    res.status(201).json(newHelp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update help data by ID
export const updateHelpData = async (req, res) => {
  try {
    const updatedHelp = await Help.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHelp) return res.status(404).json({ message: 'Help entry not found' });
    res.status(200).json(updatedHelp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE help data by ID
export const deleteHelpData = async (req, res) => {
  try {
    const deletedHelp = await Help.findByIdAndDelete(req.params.id);
    if (!deletedHelp) return res.status(404).json({ message: 'Help entry not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
