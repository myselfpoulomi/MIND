import EmergencyResource from '../models/EmergencyResourceSchema.js';

// GET all resources
export const getAllResources = async (req, res) => {
  try {
    const resources = await EmergencyResource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single resource by ID
export const getResourceById = async (req, res) => {
  try {
    const resource = await EmergencyResource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new resource
export const createResource = async (req, res) => {
  try {
    const newResource = new EmergencyResource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update resource
export const updateResource = async (req, res) => {
  try {
    const updatedResource = await EmergencyResource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedResource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(updatedResource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE resource
export const deleteResource = async (req, res) => {
  try {
    const deleted = await EmergencyResource.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
