import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllDone: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllDone, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
