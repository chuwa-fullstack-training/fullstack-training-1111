import {createStore} from 'redux';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {content: action.text, isChecked: false}],
      };
    case 'TOGGLE_ONE':
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.idx) return {...todo, isChecked: !todo.isChecked};
          else return todo;
        }),
      };
    case 'CHECK_ALL':
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isChecked: true,
        })),
      };
    case 'UNCHECK_ALL':
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isChecked: false,
        })),
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
