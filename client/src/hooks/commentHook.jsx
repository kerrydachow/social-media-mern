import { useQuery, useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "lib/constants";

export const useComments = ({ postId, token }) => {
  return useQuery(["postComments", postId], async () => {
    const res = await fetch(`${API_BASE_URL}/comments/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.json();
  });
};

export const useLikeComment = ({ commentId, loggedInUserId, token }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await fetch(`${API_BASE_URL}/comments/${commentId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      return await response.json()
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["postComments", data.postId], { exact: true });
      },
    }
  );
};

export const useCreateCommentMutation = ({
  userId,
  postId,
  description,
  token,
}) => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        postId: postId,
        description: description,
      }),
    });
    return await response.json()
  },
  {
    onSuccess: (data) => {
      queryClient.setQueryData(["postComments", data[0].postId], data, { exact: true})
    },
  }
  
  );
};
