import { Box, IconButton, Typography, Tooltip, useTheme } from "@mui/material";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLikeComment } from "hooks/commentHook";
import moment from "moment";

const CommentWidget = ({
  commentId,
  commentUserId,
  name,
  description,
  timestamp,
  userPicturePath,
  likes,
}) => {
  /* Hooks */
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const likeCommentMutation = useLikeComment({
    commentId,
    loggedInUserId,
    token,
  });
  const { palette } = useTheme();

  /* Colors */
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  const primary = palette.primary.main;

  const likeCount = Object.keys(likes).length;
  const isLiked = Boolean(likes[loggedInUserId]);

  const patchLike = () => {
    likeCommentMutation.mutate();
  };

  return (
    <Box display="flex" gap="1rem">
      <Box
        onClick={() => {
          navigate(`/profile/${commentUserId}`);
          navigate(0); // Refreshes the page
        }}
      >
        <UserImage image={userPicturePath} size="45px" />
      </Box>
      <Box width="100%">
        <Box
          width="100%"
          padding="0.5rem 0.75rem"
          gap="1rem"
          borderRadius="0.75rem"
          backgroundColor={light}
        >
          <FlexBetween>
            <Typography
              color={main}
              variant="h7"
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                navigate(`/profile/${commentUserId}`);
                navigate(0); // Refreshes the page
              }}
            >
              {name}
            </Typography>
            <Tooltip
              title={moment(timestamp).local().format('YYYY-MM-DD hh:mm:ss A')}
              PopperProps={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -15],
                    },
                  },
                ],
              }}
            >
              <Typography color={main} variant="body2" paddingLeft="1rem">
                {moment(timestamp).fromNow()}
              </Typography>
            </Tooltip>
          </FlexBetween>
          <Typography sx={{ wordBreak: "break-word" }} color={main}>
            {description}
          </Typography>
        </Box>
        <FlexBetween>
          <FlexBetween paddingLeft="0.5rem">
            <IconButton
              disabled={likeCommentMutation.isLoading}
              onClick={patchLike}
              size="small"
            >
              {isLiked ? (
                <FavoriteOutlined fontSize="10px" sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined fontSize="10px" />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default CommentWidget;
