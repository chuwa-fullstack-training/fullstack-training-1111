import {combineReducers} from "redux";

interface todoType {
  id: number,
  todo: string;
  isDone: boolean;
}

const initialState: todoType[] = [];

const todo = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length,
          todo: action.todo,
          isDone: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            isDone: !item.isDone
          };
        }
        return item;
      });
    case 'MARK_All' :
      return state.map(item => ({...item, isDone: !item.isDone}));
    case 'REMOVE_COMPLETED':
      return state.filter(item => !item.isDone);
    default:
      return [];
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer;