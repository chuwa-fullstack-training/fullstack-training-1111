import { useSelector, useDispatch } from 'react-redux'
import { changeTodo } from '../features/TodoSlice'

function TodoItems() {
  const todo = useSelector((state) => state.todo.item);
  const finished = useSelector((state) => state.todo.finished);
  const dispatch = useDispatch();

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
              <input type="checkbox" onChange={clickCheckbox} checked={finished[index]} id={index} />
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoItems;