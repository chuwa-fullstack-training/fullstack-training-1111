import {createSlice, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {act} from 'react';

const initialState = {
  todos: [],
  loading: false,
  error: false,
  errorMessage: '',
};

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const res = await fetch(baseURL);
    if (!res.ok) {
      throw new Error('Failed to fetch todos');
    }
    return res.json();
  }
);

export const createTodoAsync = createAsyncThunk(
  'todos/createTodo',
  async (todo) => {
    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error('Failed to create todo');
    }
    return res.json();
  }
);

export const checkAllTodos = createAsyncThunk('todos/checkall', async () => {
  const res = await fetch(`${baseURL}/checkall`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to check all todos');
  }
  return res.json();
});

export const uncheckAllTodos = createAsyncThunk(
  'todos/uncheckall',
  async () => {
    const res = await fetch(`${baseURL}/uncheckall`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to check all todos');
    }
    return res.json();
  }
);

export const togglecheck = createAsyncThunk('todos/togglecheck', async (id) => {
  const res = await fetch(`${baseURL}/togglecheck`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id}),
  });
  if (!res.ok) {
    throw new Error('Failed to check all todos');
  }
  return res.json();
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.error = true;
        state.errorMessage = action.error.message || 'Failed to fetch todos';
        state.loading = false;
      });

    builder
      .addCase(createTodoAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.loading = false;
      })
      .addCase(createTodoAsync.rejected, (state, action) => {
        state.error = true;
        state.errorMessage = action.error.message || 'Failed to create todo';
        state.loading = false;
      });

    builder
      .addCase(checkAllTodos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(checkAllTodos.fulfilled, (state, action) => {
        state.todos.forEach((todo) => {
          todo.isChecked = true;
        });
        state.loading = false;
      })
      .addCase(checkAllTodos.rejected, (state, action) => {
        state.error = true;
        state.errorMessage =
          action.error.message || 'Failed to check all todos';
        state.loading = false;
      });

    builder
      .addCase(uncheckAllTodos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(uncheckAllTodos.fulfilled, (state, action) => {
        state.todos.forEach((todo) => {
          todo.isChecked = false;
        });
        state.loading = false;
      })
      .addCase(uncheckAllTodos.rejected, (state, action) => {
        state.error = true;
        state.errorMessage =
          action.error.message || 'Failed to check all todos';
        state.loading = false;
      });

    builder
      .addCase(togglecheck.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(togglecheck.fulfilled, (state, action) => {
        const todoToUpdate = state.todos.find(
          (todo) => todo._id === action.meta.arg
        );
        if (todoToUpdate) {
          todoToUpdate.isChecked = !todoToUpdate.isChecked;
        }
        state.loading = false;
      })
      .addCase(togglecheck.rejected, (state, action) => {
        state.error = true;
        state.errorMessage =
          action.error.message || 'Failed to check all todos';
        state.loading = false;
      });
  },
});

export const store = configureStore({
  reducer: {todos: todoSlice.reducer},
});
