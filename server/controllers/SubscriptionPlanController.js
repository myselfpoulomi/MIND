import SubscriptionPlan from '../models/SubscriptionPlanSchema.js';

// GET all subscription plans
export const getAllPlans = async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single plan by ID
export const getPlanById = async (req, res) => {
  try {
    const plan = await SubscriptionPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    res.status(200).json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new plan
export const createPlan = async (req, res) => {
  try {
    const newPlan = new SubscriptionPlan(req.body);
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE a plan
export const updatePlan = async (req, res) => {
  try {
    const updated = await SubscriptionPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Plan not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a plan
export const deletePlan = async (req, res) => {
  try {
    const deleted = await SubscriptionPlan.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Plan not found' });
    res.status(200).json({ message: 'Plan deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
