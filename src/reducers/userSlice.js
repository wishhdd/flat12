import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  notification: 2,
  newMessage: 14,
  newFriendRequests: 4,
  user: {
    callSign: [],
    eMail: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    city: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    saveStateLocalStorage: (state, action) => {
      state = { ...state, user: action.payload };
      localStorage.setItem("privatka_user", JSON.stringify(state));
    },
  },
});

export const { loading, saveStateLocalStorage } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
