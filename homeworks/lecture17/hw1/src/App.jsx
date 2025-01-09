import './App.css'
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import { useDispatch } from 'react-redux'
import { addToList } from '../features/TodoSlice'

function App() {
  const dispatch = useDispatch();

  const addItem = (e) => {
    if (e.key === 'Enter') {
      dispatch(addToList(e.target.value));
    }
  };

  return (
    <>
      <h1> Todos - ReactJS </h1>
      <input placeholder='Type a todo and hit enter' onKeyDown={addItem} className='itemInput'></input>
      <TodoActions />
      <TodoItems />
    </>
  )
}

export default App