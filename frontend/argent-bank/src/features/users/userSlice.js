import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  userProfile: {},
  setEdit: false,
  allowCookies: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userLoggedIn = true;
      state.userProfile = payload.data.body;
    },
    changeUserName: (state, { payload }) => {
      state.userProfile.userName = payload.data.body.userName;
    },
    setEditMode: (state) => {
      state.setEdit = !state.setEdit;
    },
    logOut: (state) => {
      state.userLoggedIn = false;
      state.userProfile = {};
      state.setEdit = false;
    },
    allowCookies: (state) => {
      state.allowCookies = true;
    },
  },
});

export const { setUser, logOut, changeUserName, setEditMode, allowCookies } =
  userSlice.actions;

export default userSlice.reducer;

export const userLoggedIn = (state) => state.user.userLoggedIn;
export const setEditUserName = (state) => state.user.setEdit;
export const userProfile = (state) => state.user.userProfile;
export const okWithCookies = (state) => state.user.allowCookies;
