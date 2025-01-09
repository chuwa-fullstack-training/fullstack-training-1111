import { useSelector, useDispatch } from 'react-redux'
import { changeTodo, loadList } from '../features/TodoSlice'
import { useEffect } from 'react'

function TodoItems() {
  const todo = useSelector((state) => state.todo.item);
  const finished = useSelector((state) => state.todo.finished);
  const todoId = useSelector((state) => state.todo.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList());
  }, []);

  const clickCheckbox = (e) => {
    const id = e.target.id;
    dispatch(changeTodo(id));
  };

  return (
    <div>
      {
        todo.map((item, index) => {
          return (
            <div>
              <input type="checkbox" onChange={clickCheckbox} checked={finished[index]} id={todoId[index]} />
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoItems;