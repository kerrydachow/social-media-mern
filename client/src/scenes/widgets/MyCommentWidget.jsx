import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCommentMutation } from "hooks/commentHook";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { setPostCommentCount } from "state";
import { SendSharp } from "@mui/icons-material";

const MyCommentWidget = ({ picturePath, userId, postId }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const main = palette.neutral.main;
  const [comment, setComment] = useState("");
  const token = useSelector((state) => state.token);

  const createCommentMutation = useCreateCommentMutation({
    userId: userId,
    postId: postId,
    description: comment,
    token: token,
  });
  const createComment = () => {
    createCommentMutation.mutateAsync().then((res) => {
      /* Update comment count on PostWidget using Redux State */
      dispatch(setPostCommentCount({comments: res}));
    });
    setComment("")
  };
  return (
    <Box paddingBottom="1rem" marginBottom="1rem">
      <Box display="flex" gap="1rem">
        <UserImage image={picturePath} size="45px" />
        <Box
          width="100%"
          borderRadius="0.75rem"
          backgroundColor={palette.neutral.light}
        >
          <InputBase
            placeholder="What's on your mind..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            multiline
            sx={{
              width: "100%",
              color: main,
              backgroundColor: palette.neutral.light,
              borderRadius: "0.75rem",
              padding: "0.5rem 0.75rem",
            }}
          />
          <FlexBetween>
            <FlexBetween />
            <IconButton
              size="large"
              disabled={!comment || createCommentMutation.isLoading}
              sx={{ color: palette.primary.main }}
              onClick={createComment}
            >
              <SendSharp />
            </IconButton>
          </FlexBetween>
        </Box>
      </Box>
    </Box>
  );
};

export default MyCommentWidget;
