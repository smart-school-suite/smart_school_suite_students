import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleSetAuthUser: (state, action) => {
      state.user = action.payload.user;
    },
    handleSetUserLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
});

export const {
  handleSetAuthUser,
 handleSetUserLogout
} = authSlice.actions;
export default authSlice.reducer;
