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

export const addTodo = createAsyncThunk("addTodo", async (newTodo) => {
    try {
        const response = await axios.post("http://localhost:3000/api/todos", newTodo)
        return response.data
    } catch(err) {
        return err.message
    }
})

export const updateTodo = createAsyncThunk("updateTodo", async (id) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/todos/${id}`)
        console.log(response.data)
        return response.data

    } catch(err) {
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
        // addItem(state, action){
        //     state.todos.push(action.payload)
        // },
        // setInput(state, action){
        //     state.inputVal = action.payload
        // },
        // updateTodos(state, action){
        //     state.todos = action.payload
        // },
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
        .addCase(addTodo.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todos = [ ...state.todos, action.payload ]
        })
        .addCase(addTodo.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(updateTodo.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(updateTodo.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todos = state.todos.map((item) => {
                if(item._id === action.payload._id){
                    item.isCompleted = action.payload.isCompleted
                    return item
                } else {
                    return item
                }
            })
        })
        .addCase(updateTodo.rejected, (state, action) => {
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