import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from '../features/TodoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer
  },
})