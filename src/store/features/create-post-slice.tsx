import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  value: {
    clicked: Boolean
  };
};

const initialState: InitialState = {
  value: {
    clicked: false
  }
};

const loginButton = createSlice({
  name: "loginButtonClicked",
  initialState,
  reducers: {
    createPostClick: (state:InitialState) => {
      void(state.value.clicked = !state.value.clicked)
    }
  },
});

export const { createPostClick } = loginButton.actions;

export default loginButton.reducer;
