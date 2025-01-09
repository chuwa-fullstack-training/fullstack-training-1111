import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [all, setAll] = useState(false);

  const addItem = (e) => {
    if (e.key === 'Enter') {
      setTodo((prev) => [...prev, {value: e.target.value, finished: false}]);
    }
  };

  const clickCheckbox = (e) => {
    const id = e.target.id;
    setTodo((prev) => {
      return prev.map((item, index) => {
        if (index == id) {
          return {value: item.value, finished: !item.finished};
        } else {
          return item;
        }
      });
    });
  };

  const clearTodo = () => {
    setTodo((prev) => {
      return prev.map((item) => {
        return {value: item.value, finished: false}
      });
    })
    setAll((prev) => false);
  };

  const markTodo = () => {
    setTodo((prev) => {
      return prev.map((item) => {
        return {value: item.value, finished: true}
      });
    })
    setAll((prev) => !prev);
  };

  const getRemaining = () => {
    return todo.filter((item) => !item.finished).length;
  };

  return (
    <>
      <h1> Todos - ReactJS </h1>
      <div>
        <input placeholder='Type a todo and hit enter' onKeyDown={addItem} className='itemInput'></input>
        <div className="card">
          {getRemaining()} remaining
          <button onClick={clearTodo}>Clear Completed Todos</button>
        </div>
      </div>
      <div>
        <input type="checkbox" onChange={markTodo} checked={all}/>
        Mark all as done
      </div>
      <div>
      {
        todo.map((item, index) => {
          return (
            <div>
              <input type="checkbox" onChange={clickCheckbox} checked={item.finished} id={index} />
              {item.value}
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default App
