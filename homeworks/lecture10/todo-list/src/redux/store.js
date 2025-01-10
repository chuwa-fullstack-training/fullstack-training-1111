import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todosReducer, // Add other reducers here as needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
