import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action: Fetch all todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:4000/api/todos');
  return response.data;
});

// Async action: Create a new todo
export const createTodo = createAsyncThunk('todos/createTodo', async (text) => {
  const response = await axios.post('http://localhost:4000/api/todos', { text });
  return response.data;
});

// Async action: Delete a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`http://localhost:4000/api/todos/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching todos
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle creating a todo
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      // Handle deleting a todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;