// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  user:null,
};
const loginUserSlice = createSlice({
  name: "loginUserData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log("data in add User " + JSON.stringify(action.payload));
      state.user = action.payload;
    },
    removeUser: (state, action) => {},
  },
});
export const { addUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
