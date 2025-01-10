/*Plain Redux*/
import { createStore } from "redux";

const initialState = {
    todos: [],
    markAll: false,
};

// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const MARK_ALL_TODOS = 'MARK_ALL_TODOS';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

const todoRecuder = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {text: action.payload, done:false}],
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload ? {...todo, done: !todo.done} : todo
                ),
            };

        case MARK_ALL_TODOS:
            const allMarked = !state.markAll;
            return {
                ...state,
                todos: state.todos.map((todo) => ({...todo, done: allMarked})),
                markAll: allMarked,
            };

        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.done),
            };
        
        default:
            return state;
    }
};


// action creators
export const addTodo = (text) => ({type: ADD_TODO, payload: text});
export const toggleTodo = (index) => ({type: TOGGLE_TODO, payload: index});
export const markAllTodos = () => ({type: MARK_ALL_TODOS});
export const clearCompleted = () => ({type: CLEAR_COMPLETED});

// store
export const store = createStore(todoRecuder);

// 三驾马车: reducer action store

