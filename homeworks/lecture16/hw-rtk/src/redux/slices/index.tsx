import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface todoType {
  id: number,
  todo: string;
  isDone: boolean;
}

const initialState: todoType[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: string }>) => {
      const newTodo = {
        id: new Date().getTime(),
        todo: action.payload.todo,
        isDone: false
      };
      const newState = [...state, newTodo];
      return newState;
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isDone: !item.isDone
          };
        }
        return item;
      });
      return newState;
    },
    markAll: (state) => {
      const newState = state.map(item => ({...item, isDone: !item.isDone}));
      return newState;
    },
    removeCompleted: (state) => {
      const newState = state.filter(item => !item.isDone);
      return newState
    },
  }
});

export const { addTodo, toggleTodo, markAll, removeCompleted } = todoSlice.actions;

export default todoSlice.reducer; 