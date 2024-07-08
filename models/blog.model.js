import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    headline: {
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
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;