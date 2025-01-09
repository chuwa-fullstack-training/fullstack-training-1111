import { useSelector, useDispatch } from 'react-redux'
import { clearAllTodo, markAllTodo } from '../features/TodoSlice'

function TodoActions() {
    const finished = useSelector((state) => state.todo.finished);
    const dispatch = useDispatch();

  const clearTodo = () => {
    dispatch(clearAllTodo());
  };

  const markTodo = () => {
    dispatch(markAllTodo());
  };

  const getRemaining = () => {
    return finished.filter((item) => !item).length;
  };

    return (
      <>
        <div className="card">
          {getRemaining()} remaining
          <button onClick={clearTodo}>Clear Completed Todos</button>
        </div>
        <div>
          <input type="checkbox" onChange={markTodo} checked={getRemaining() === 0}/>
          Mark all as done
        </div>
      </>
    )
}

export default TodoActions;