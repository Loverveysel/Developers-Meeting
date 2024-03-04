import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  value: {
    loginShow: Boolean,
    signupShow: Boolean
  };
};

const initialState: InitialState = {
  value: {
    loginShow: false,
    signupShow: false
  }
};

const loginButton = createSlice({
  name: "loginButtonClicked",
  initialState,
  reducers: {
    loginClick: (state:InitialState) => {
      void(state.value.loginShow = !state.value.loginShow)
    },
    signupClick: (state:InitialState) => {
      void(state.value.signupShow = !state.value.signupShow)
    },
  },
});

export const { loginClick, signupClick } = loginButton.actions;

export default loginButton.reducer;
