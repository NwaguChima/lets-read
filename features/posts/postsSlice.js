import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  const response = await axios.post(POST_URL, post);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (post) => {
  const { id } = post;

  const response = await axios.delete(`${POST_URL}/${id}`);
  if (response?.status === 200) return post;
  return `${response?.status}: ${response?.statusText}`;
});

const initialState = {
  posts: [],
  status: "idle", // idle, loading, failed
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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

        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.comments = [];
          return post;
        });

        // state.posts = state.posts.concat(loadedPosts);
        state.posts = loadedPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could not be completed: ", action.payload);
          state.error = "Delete could not be completed:";
          state.status = "failed";
          return;
        }

        const { id } = action.payload;
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = posts;
      });
  },
});

export const { addPost, removePost, addComment } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const selectPostById = (state, postId) => {
  console.log("======", postId, state);
  return state.posts.posts.find((post) => post.id === postId);
};

export default postsSlice.reducer;
