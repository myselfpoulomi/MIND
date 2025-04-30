import Professional from '../models/ProfessionalSchema.js';

// Get all professionals
export const getAllProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.json(professionals);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get one professional by ID
export const getProfessionalById = async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id);
    if (!professional) return res.status(404).json({ error: 'Not found' });
    res.json(professional);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new professional
export const createProfessional = async (req, res) => {
  try {
    const newProfessional = new Professional(req.body);
    await newProfessional.save();
    res.status(201).json(newProfessional);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a professional
export const updateProfessional = async (req, res) => {
  try {
    const updated = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a professional
export const deleteProfessional = async (req, res) => {
  try {
    const deleted = await Professional.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
