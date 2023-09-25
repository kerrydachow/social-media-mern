import Post from "../models/Post.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
    try {
        const { userId, postId, description } = req.body;
        const user = await User.findById(userId);
        const post = await Post.findById(postId);
        const newComment = new Comment({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            userPicturePath: user.picturePath,
            postId,
            description,
            likes: {},
        });
        await newComment.save();
        post.comments.push(newComment._id.toHexString());
        await post.save();
        const postComments = await Comment.find({ postId });
        res.status(201).json(postComments);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export const getPostComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ postId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const likeComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const comment = await Comment.findById(id);
        const isLiked = comment.likes.get(userId);
        if (isLiked) {
            comment.likes.delete(userId);
        } else {
            comment.likes.set(userId, true);
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            id,
            { likes: comment.likes },
            { new: true }
        );
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
