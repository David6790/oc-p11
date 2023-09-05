import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  firstName: "",
  lastName: "",
  userName: "bonjour",
  id: "",
  setEdit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userLoggedIn = true;
      state.firstName = payload.data.body.firstName;
      state.lastName = payload.data.body.lastName;
      state.id = payload.data.body.id;
    },
    logOut: (state) => {
      state.userLoggedIn = false;
      state.firstName = "";
      state.lastName = "";
      state.id = "";
    },
    changeUserName: (state, { payload }) => {
      state.userName = payload.data.body.userName;
    },
    setEditMode: (state) => {
      state.setEdit = !state.setEdit;
    },
  },
});

export const { setUser, logOut, changeUserName, setEditMode } =
  userSlice.actions;
export default userSlice.reducer;

export const userLoggedIn = (state) => state.user.userLoggedIn;
export const userFirstName = (state) => state.user.firstName;
export const userLastName = (state) => state.user.lastName;
export const userName = (state) => state.user.userName;
export const setEditUserName = (state) => state.user.setEdit;
