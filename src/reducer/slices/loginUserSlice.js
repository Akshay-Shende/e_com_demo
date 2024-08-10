// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  user: { name: "Akshay Shende", school: "M.G.Vidyalaya" },
};
const loginUserSlice = createSlice({
  name: "loginUserData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state);
      console.log("data in add User " + action.payload);
      state.user = action.payload;
    },
    removeUser: (state, action) => {},
  },
});
export const { addUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
