import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    item: [],
    finished: [],
  },
  reducers: {
    addToList: (state, action) => {
      state.item.push(action.payload);
      state.finished.push(false);
    },
    changeTodo: (state, action) => {
      state.finished[action.payload] = !state.finished[action.payload];
    },
    clearAllTodo: (state) => {
        state.finished = state.finished.map((i) => false);
    },
    markAllTodo: (state) => {
        state.finished = state.finished.map((i) => true);
    },
  },
})

export const { addToList, changeTodo, clearAllTodo, markAllTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer