import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

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

const initialState = postsAdapter.getInitialState({
  status: "idle", // idle, loading, failed or succeeded
  error: null,
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.entities[postId];
      post.comments.push(comment);
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
        postsAdapter.upsertMany(state, loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could not be completed: ", action.payload);
          state.error = "Delete could not be completed:";
          state.status = "failed";
          return;
        }

        const { id } = action.payload;
        postsAdapter.removeOne(state, id);
      });
  },
});

export const { addComment } = postsSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// memoized selector to get posts by user and avoid re-rendering of components
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export default postsSlice.reducer;
