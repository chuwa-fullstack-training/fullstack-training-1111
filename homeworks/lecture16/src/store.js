import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import ReactDOM from "react-dom";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
