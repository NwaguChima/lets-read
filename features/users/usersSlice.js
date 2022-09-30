import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USER_URL);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      // emmerjs is used to mutate the state, hence allows for push
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { getUsers } = usersSlice.actions;

export const selectAllUsers = (state) => state.user;
export const selectUserById = (state, userId) =>
  state.user.find((user) => user.id === userId);

export default usersSlice.reducer;
