import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  profileFriends: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Change Light Mode -> Dark Mode
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    // Store user and token
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Remove user and token
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    // Grab user's friends
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent.");
      }
    },
    // Grab all posts
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setProfileFriends: (state, action) => {
      if (state.user) {
        state.profileFriends = action.payload.profileFriends;
      } else {
        console.error("user friends non-existent.")
      }
    }
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setProfileFriends } =
  authSlice.actions;
export default authSlice.reducer;
