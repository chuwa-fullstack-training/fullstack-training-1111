export const clearAllTodo = () => ({ type: 'CLEARALL' });
export const markAllTodo = () => ({ type: 'MARKALL' });
export const addToList = (value) => ({ type: 'ADD', payload: value });
export const changeTodo = (value) => ({ type: 'TOGGLE', payload: value });