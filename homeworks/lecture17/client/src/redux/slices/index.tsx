import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface todoType {
  _id: number,
  todo: string;
  done: boolean;
}

export interface todoState {
  todos: todoType[];
  loading: boolean;
  error: string | null;
  status: 'idle' | 'succeeded' | 'failed';
}

const initialState: todoState = {
  todos: [],
  loading: false,
  error: null,
  status: 'idle'
};

const baseUrl = 'http://localhost:4000/api';

export const addTodo: any = createAsyncThunk(
  'todos/addTodo',
  async (todo: todoType) => {
    try {
      const response = await fetch(baseUrl + '/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const getTodos: any = createAsyncThunk(
  'todos/getTodos',
  async () => {
    try {
      const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json() as todoType[];
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const updateTodo: any = createAsyncThunk(
  'todos/updateTodo',
  async (id: number) => {
    try {
      const response = await fetch(baseUrl + '/todos/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'idle';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.loading = false;
        state.status = 'succeeded';
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.status = 'failed';
      })
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'idle';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
        state.status = 'succeeded';
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.status = 'failed';
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'idle';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            return action.payload;
          }
          return todo;
        });
        state.loading = false;
        state.status = 'succeeded';
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.status = 'failed';
      });
  }
});


export default todoSlice.reducer; 