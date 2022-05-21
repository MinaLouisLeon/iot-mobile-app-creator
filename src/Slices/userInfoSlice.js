import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
    phoneNumber: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo.uid = action.payload.uid;
      state.userInfo.displayName = action.payload.displayName;
      state.userInfo.email = action.payload.email;
      state.userInfo.photoURL = action.payload.photoURL;
      state.userInfo.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
