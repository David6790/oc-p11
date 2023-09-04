import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  firstName: "",
  lastName: "",
  userName: "",
  id: "",
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
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;

export const userLoggedIn = (state) => state.user.userLoggedIn;
