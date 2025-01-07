const ADD_ITEM = "ADD_ITEM"
const SET_INPUT = "SET_INPUT"
const UPDATE_TODOS = "UPDATE_TODOS"
const UPDATE_ISALLDONE = "UPDATE_ISALLDONE"

const initialState = {
    todos: [{ itemLabel: "grocery shopping for next week", isCompleted: false }],
    inputVal: "",
    isAllDone: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_ITEM: return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        case SET_INPUT: return {
            ...state,
            inputVal: action.payload
        }

        case UPDATE_TODOS: return {
            ...state,
            todos: action.payload
        }
        case UPDATE_ISALLDONE: return {
            ...state,
            isAllDone: action.payload
        }


        default: return state
    }
};

export default reducer;