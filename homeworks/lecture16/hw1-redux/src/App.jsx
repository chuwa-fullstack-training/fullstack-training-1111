import './App.css'
import TodoItems from './TodoItems';
import TodoActions from './TodoActions';
import TodoInput from './TodoInput';

function App() {
  return (
    <>
      <h1> Todos - ReactJS </h1>
      <TodoInput />
      <TodoActions />
      <TodoItems />
    </>
  )
}

export default App
