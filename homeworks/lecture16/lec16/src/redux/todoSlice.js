import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        markAll: false,
    },

    reducers: {
        addTodo: (state, action) => {

            state.todos.push({text: action.payload, done: false});
        },

        toggleTodo: (state, action) => {
            const todo = state.todos[action.payload];
            if(todo) {
                todo.done = !todo.done;
            }
        },

        markAllTodos: (state) => {
            const allMarked = !state.markAll;
            state.todos.forEach((todo) => {
                todo.done = allMarked;
            });
            state.markAll = allMarked;
        },

        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.done);
        },
    },
});

export const { addTodo, toggleTodo, markAllTodos, clearCompleted } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});
