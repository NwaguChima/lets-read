import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John Doe",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      // emmerjs is used to mutate the state, hence allows for push
      state.push(action.payload);
    },
  },
});

export const { getUsers } = usersSlice.actions;

export const selectAllUsers = (state) => state.user;
export default usersSlice.reducer;
