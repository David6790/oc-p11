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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
