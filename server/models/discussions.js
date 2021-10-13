import mongoose from 'mongoose';

const discussionsSchema = mongoose.Schema({
    discussionName: { type: String, required: true},
    discussionBio: { type: String, required: true},
    discussionId: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdById: { type: String, required: true },
    oragnizers: { type: [{ 
        username: String,
        userId: mongoose.Schema.Types.ObjectId
    }], default: [] },
    attendees: { type: [{ 
        username: String,
        userId: mongoose.Schema.Types.ObjectId
    }], default: [] },
    posts: { 
        type: [mongoose.Schema.Types.ObjectId], ref: 'Posts', default: []
    }
})

export default mongoose.model("Discussions", discussionsSchema)