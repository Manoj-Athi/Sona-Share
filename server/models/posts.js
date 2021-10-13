import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
    postTitle: { type: String, required: true},
    postBody: { type: String, required: true},
    postedBy: { type: String, required: true },
    postedOn: { type: Date, default: Date.now },
    likes: { type: [String], default: [] },
    comments: { type: [{
        comment: { type: String },
        commentedBy: { type: String },
        commentedAt: { type: Date, default: Date.now }
    }], default: [] },
})

export default mongoose.model("Posts", postsSchema)