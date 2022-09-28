import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});
