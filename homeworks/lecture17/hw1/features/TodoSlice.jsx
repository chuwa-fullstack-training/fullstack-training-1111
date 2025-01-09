import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loadList = createAsyncThunk(
  'todo/loadList',
  async () => {
    const response = await fetch('http://localhost:3000/lists')
    const data = await response.json();
    return data;
  }
);

export const addToList = createAsyncThunk(
  'todo/addToList',
  async (name) => {
    const response = await fetch('http://localhost:3000/list/' + name, {
      method: "POST"
    })
    const data = await response.json();
    return data;
  }
);

export const changeTodo = createAsyncThunk(
  'todo/changeList',
  async (id) => {
    const response = await fetch('http://localhost:3000/toggleList/' + id, {
      method: "POST"
    })
    const data = await response.json();
    return data;
  }
);

export const clearAllTodo = createAsyncThunk(
  'todo/clearAll',
  async () => {
    const response = await fetch('http://localhost:3000/clearAll')
    const data = await response.json();
    return data;
  }
);

export const markAllTodo = createAsyncThunk(
  'todo/markAll',
  async () => {
    const response = await fetch('http://localhost:3000/markAll')
    const data = await response.json();
    return data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    item: [],
    finished: [],
    id: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadList.fulfilled, (state, action) => {
        action.payload.forEach((list) => {
          state.item.push(list.todo);
          state.finished.push(list.done);
          state.id.push(list._id);
        });
      })
      .addCase(addToList.fulfilled, (state, action) => {
        state.item.push(action.payload.todo);
        state.finished.push(false);
      })
      .addCase(changeTodo.fulfilled, (state, action) => {
        state.id.forEach((id, index) => {
          if (id === action.payload._id) {
            state.finished[index] = !state.finished[index];
          }
        })
      })
      .addCase(clearAllTodo.fulfilled, (state, action) => {
        state.finished = state.finished.map((i) => false);
      })
      .addCase(markAllTodo.fulfilled, (state, action) => {
        state.finished = state.finished.map((i) => true);
      });
  },
})

export const todoReducer = todoSlice.reducer