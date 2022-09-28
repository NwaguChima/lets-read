import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

const initialState = {
  posts: [
    {
      id: 1,
      title: "Hello",
      content: "Hello World",
      userId: 1,
      comments: [],
    },
  ],
  status: "idle", // idle, loading, failed
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // emmerjs is used to mutate the state, hence allows for push
        state.posts.push(action.payload);
      },
      prepare(id, title, content, userId) {
        return {
          payload: {
            id,
            title,
            content,
            date: new Date().toISOString(),
            userId,
            comments: [],
          },
        };
      },
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      post.comments.push(comment);
    },

    removePost: (state, action) => {
      // emmerjs is used to mutate the state, hence allows for filter
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPost, removePost, addComment } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
