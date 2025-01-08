import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    try {
        const response = await axios.get("http://localhost:3000/")
        // console.log(response.data.todos)
        return response.data.todos
    } catch(err){
        return err.message
    }
})

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: [],
        status: 'idle', // loading | succeeded | failed
        error: null,
        inputVal: "",
        // isAllDone: false
    },
    reducers: {
        addItem(state, action){
            state.todos.push(action.payload)
        },
        setInput(state, action){
            state.inputVal = action.payload
        },
        updateTodos(state, action){
            state.todos = action.payload
        },
        // updateIsAllDone(state, action){
        //     state.isAllDone = action.payload
        // },
    },
    extraReducers(builder){
        builder
        .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todos = action.payload
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const actions = todoListSlice.actions

const store = configureStore({
    reducer: todoListSlice.reducer
})


export default store;