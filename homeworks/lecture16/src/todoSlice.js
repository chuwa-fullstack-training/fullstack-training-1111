import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text = action.payload;
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    markAllCompleted(state, action) {
      const isChecked = action.payload;
      state.todos.forEach((todo) => {
        todo.completed = isChecked;
      });
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
