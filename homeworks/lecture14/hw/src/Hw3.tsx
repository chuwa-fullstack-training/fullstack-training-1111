import { useState } from 'react';

interface TodoType {
  todo: string;
  isDone: boolean;
}

const Hw3 = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todoInput, setTodoInput] = useState('')
  const [checkAll, setCheckAll] = useState(false);

  // Add a new todo
  const addTodo = (todo: string) => {
    const newTodos = [...todos, { todo: todo, isDone: false }]
    setTodos(newTodos)
  }

  // Mark a todo as completed / uncompleted
  const toggleTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone
    setTodos(newTodos)
  }

  // Mark all todos as completed
  const markAll = () => {
    setCheckAll(!checkAll)
    const newTodos = todos.map(todo => {
      todo.isDone = !todo.isDone
      return todo
    })
    setTodos(newTodos)
  }

  const removeCompleted = () => {
    setCheckAll(false)
    const newTodos = todos.filter(todo => !todo.isDone)
    setTodos(newTodos)
  }

    return (
      <div className="todoContainer">
        <div className='todoContent'>
          <h2>Todos - ReactJs</h2>
          <div className='todoInput'>
            <input type="text" id="todoInput" placeholder="Type a todo and hit enter"
              onChange={(e) => {
                setTodoInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && todoInput) {
                  addTodo(todoInput)
                  setTodoInput('')
                }
              }} 
              value={todoInput}
              />
          </div>
          <div className='todoInfo'>
            <span>{todos.filter(todo => !todo.isDone).length} remaining</span>
            <button onClick={removeCompleted}>Clear Completed Todos</button>
          </div>
          <div className='markAll'>
            <input type='checkbox' id='toggleAll' onClick={markAll} checked={checkAll} />
            <label htmlFor="toggleAll">Mark All Done</label>
          </div>
          <ul>
            {
              todos.map((todo, index) => (
                <li key={index}>
                  <input type='checkbox' onClick={() => toggleTodo(index)} checked={todo.isDone} />
                  <span>{todo.todo}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
}

export default Hw3;