import axios from "axios";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODOS_REQUEST" });
  try {
    const response = await axios.get("/api/todo");
    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post("/api/todo", todo);
    console.log("Response from backend:", response.data);
    dispatch({ type: "ADD_TODO", payload: response.data });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};
