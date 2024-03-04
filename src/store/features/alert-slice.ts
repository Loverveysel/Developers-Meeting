import { createSlice } from "@reduxjs/toolkit"

export type InitialState = {
  value: {
    alert: Boolean
  };
};

const initialState: InitialState = {
  value: {
    alert: false
  }
};

const loginButton = createSlice({
  name: "loginButtonClicked",
  initialState,
  reducers: {
    alert: (state:InitialState) => {
      void(state.value.alert = !state.value.alert)
    },
  },
});

export const { alert } = loginButton.actions

export default loginButton.reducer
