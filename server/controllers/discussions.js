import Discussions from '../models/discussions.js' 

export const createDiscussion = async ( req, res) => {
    const { discussionName, discussionBio, createdBy, discussionId } = req.body;
    if(!req.userId){
        return res.status(403).json({ message: "unauthenticated" })
    }
    try {
        // console.log(req.body)
        // console.log(req.userId)
        const newDiscussion = new Discussions({ discussionName, discussionBio, discussionId, createdBy, createdById: req.userId });
        await newDiscussion.save();
        res.status(201).json(newDiscussion);
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't created a new discussion");
    }
}

export const getAllDiscussion = async ( req, res) => {
    try {
        const { id: _id } = req.params ;
        const discussions = await Discussions.find({ "createdById": _id });
        // const discussions_organized = await Discussions.find({"oragnizers": _id });
        // const discussions_attendee = await Discussions.find({"attendees": _id });
        // const discussions = await Discussions.find({ 'createdById': _id, 'oragnizers': { $all: [_id]}, 'attendees': { $all: [_id] } });
        res.status(200).json(discussions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const joinDiscussion = async ( req, res ) => {
    if(!req.userId){
        return res.status(403).json({ message: "unauthenticated" })
    }
    try{
        const { discussionId, username } = req.body;
        const discussions = await Discussions.findOneAndUpdate({ discussionId }, { $addToSet: {'attendees' : [{ username, userId: req.userId}]} }, { new: true })
        res.status(200).json(discussions);
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}