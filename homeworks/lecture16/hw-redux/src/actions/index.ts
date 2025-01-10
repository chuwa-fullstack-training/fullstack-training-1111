export const addTodo = (todo: string) => ({
  type: 'ADD_TODO',
  isDone: false,
  todo: todo
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id
});

export const markAll = () => ({
  type: 'MARK_All',
});

export const removeCompleted = () => ({
  type: 'REMOVE_COMPLETED'
});


