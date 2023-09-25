import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  likes: {
    type: Map,
    of: Boolean,
  },
  description: String,
  userPicturePath: String,
},
{timestamps: true}
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment
