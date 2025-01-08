import { configureStore, createSlice } from "@reduxjs/toolkit"

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: [{ itemLabel: "sample todo item form redux toolkit", isCompleted: false }],
        inputVal: "",
        isAllDone: false
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
        updateIsAllDone(state, action){
            state.isAllDone = action.payload
        },
    }
})

export const actions = todoListSlice.actions

const store = configureStore({
    reducer: todoListSlice.reducer
})


export default store;