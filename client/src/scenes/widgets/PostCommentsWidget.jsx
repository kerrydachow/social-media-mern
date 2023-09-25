import React from "react";
import { Box } from "@mui/material";
import { useComments } from "hooks/commentHook";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import CommentWidget from "./CommentWidget";
import MyCommentWidget from "./MyCommentWidget";

const PostCommentsWidget = ({ postId }) => {
  const token = useSelector((state) => state.token);
  const { _id, picturePath } = useSelector((state) => state.user);
  const { data: commentsData, isLoading: commentsLoading } = useComments({
    postId,
    token,
  });
  return (
    <>
      <MyCommentWidget picturePath={picturePath} postId={postId} userId={_id} />
      {commentsLoading && (
        <Box mt="0.5rem" display="flex" justifyContent="center">
          <CircularProgress />{" "}
        </Box>
      )}
      {!commentsLoading && (
        <>
          {commentsData.map((comment, i) => (
            <CommentWidget
              key={`${comment.firstName}-${i}`}
              commentId={comment._id}
              commentUserId={comment.userId}
              name={`${comment.firstName} ${comment.lastName}`}
              description={comment.description}
              timestamp={comment.createdAt}
              userPicturePath={comment.userPicturePath}
              likes={comment.likes}
            />
          ))}
        </>
      )}
    </>
  );
};

export default PostCommentsWidget;
