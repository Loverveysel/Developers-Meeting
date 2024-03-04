import loginSlice from "./features/login-slice"
import signupSlice from "./features/signup-slice"
import createPostSlice from "./features/create-post-slice"
import alertSlice from "./features/alert-slice"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export const store = configureStore({
  reducer: {
    loginSlice,
    signupSlice,
    createPostSlice,
    alertSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
