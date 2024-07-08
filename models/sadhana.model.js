import mongoose from 'mongoose';
const sadhanaSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            trim: true
        },
        topic: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: String,
            required: true,
            trim: true
        },
        chanting: {
            type: String,
            required: true,
            trim: true
        },
        rounds: {
            type: String,
            required: true,
            trim: true
        },
        interval: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

const Sadhana = mongoose.model('Sadhana', sadhanaSchema);

export default Sadhana;
