import {configureStore, createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({content: action.payload, isChecked: false});
    },
    toggleOne: (state, action) => {
      const todo = state[action.payload];
      if (todo) todo.isChecked = !todo.isChecked;
    },
    checkAll: (state) => {
      state.forEach((todo) => (todo.isChecked = true));
    },
    uncheckAll: (state) => {
      state.forEach((todo) => (todo.isChecked = false));
    },
  },
});

export const {addTodo, toggleOne, checkAll, uncheckAll} = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
