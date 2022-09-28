import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Hello",
    content: "Hello World",
    userId: 1,
    comments: [],
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // emmerjs is used to mutate the state, hence allows for push
      state.push(action.payload);
    },
    removePost: (state, action) => {
      // emmerjs is used to mutate the state, hence allows for filter
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;

export const selectAllPosts = (state) => state.post;
export default postsSlice.reducer;
