import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();

          if (!post?.comments) post.comments = [];

          return post;
        });

        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => [
        { type: "Post", id: "LIST" },
        ...result.ids.map(({ id }) => ({ type: "Post", id })),
      ],
    }),

    getPostsByUserId: builder.query({
      query: (userId) => `posts?userId=${userId}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.data)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          if (!post?.comments) post.comments = [];

          return post;
        });

        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => {
        return [...result.ids.map((id) => ({ type: "Post", id }))];
      },
    }),

    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: {
          ...initialPost,
          userId: Number(initialPost.userId),
          date: new Date().toISOString(),
          comments: [],
        },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),

    addComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `/posts/${postId}`,
        method: "PATCH",
        body: comment,
      }),
      async onQueryStarted({ postId, comment }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          extendedApiSlice.util.updateQueryData(
            "getPosts",
            undefined,
            (draft) => {
              const post = draft.entities[postId];
              if (post) post.comments = [...post.comments, comment];
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useAddCommentMutation,
} = extendedApiSlice;

// returns the query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// creates memoized selector
const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data
);

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
);
