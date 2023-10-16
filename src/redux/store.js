import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    // reducers should be defined as key-value pairs here
    counter: counterSlice,
  },
});
