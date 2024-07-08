import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
},
{ timestamps: true }
);

const Event = mongoose.model("Events", EventSchema);
export default Event;