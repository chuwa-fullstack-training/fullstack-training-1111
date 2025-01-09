import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) todo.completed = !todo.completed;
    },
    markAllCompleted: (state) => {
      state.forEach((todo) => {
        todo.completed = true;
      });
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } =
  todoSlice.actions;

export default configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
