import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:4000/api/todos";

export const fetchTodos = createAsyncThunk("fetchTodos", async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data);
  }
});

export const addTodo = createAsyncThunk("addTodo", async ({ todo }, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, { todo });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data);
  }
});

export const toggleTodo = createAsyncThunk("toggleTodo", async ({ id, done }, thunkAPI) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { done });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data);
  }
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id, thunkAPI) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data);
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(toggleTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
