import { createSlice, configureStore } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    // 添加新的 todo
    addTodo(state, action) {
      state.todos.push({ text: action.payload, completed: false }); // 默认 completed 为 false
    },
    // 切换某个 todo 的完成状态
    toggleTodo(state, action) {
      const index = action.payload; // 获取索引
      state.todos[index].completed = !state.todos[index].completed; // 切换完成状态
    },
    // 清除已完成的 todos
    clearFinishedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed); // 保留未完成的 todo
    },
  },
});

export let { addTodo, toggleTodo, clearFinishedTodos } = todoSlice.actions;

let store = configureStore({
  reducer: {
    todoSlice: todoSlice.reducer, // 使用 todoSlice.reducer 作为 todoSlice 的 reducer
  },
});

export default store;
