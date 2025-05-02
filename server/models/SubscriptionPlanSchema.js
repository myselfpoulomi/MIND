import mongoose from 'mongoose';

const subscriptionPlanSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        enum: ['Free', 'Premium'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    billing_cycle: {
        type: String,
        enum: ['monthly', '6 months', 'yearly'],
        required: true
    },
    features: {
        type: [String], // List of feature names
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true // adds createdAt and updatedAt
});

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);

export default SubscriptionPlan;
