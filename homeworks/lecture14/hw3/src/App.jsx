import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodo] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const container = {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    textAlign: 'left',
  }

  const addTodo = (e) => {
    if(e.keyCode === 13 && inputText !== "") {
      setTodo([...todos, {content: inputText, checked: false}]);
      setInputText("");
    }
  }

  const checkTodo = i => {
    setTodo(todos.map((todo, idx) => {
      if(idx === i) return {content: todo.content, checked: !todo.checked};
      return todo;
    }))
  }

  const checkAll = () => {
    setTodo(todos.map(todo => ({content: todo.content, checked: true})));
  }

  const uncheckAll = () => {
    setTodo(todos.map(todo => ({content: todo.content, checked: false})));
  }

  useEffect(() => {
    setRemainingCount(todos.reduce((acc, curr) => {
      return acc + (curr.checked === false ? 1 : 0);
    },0))
  }, [todos])

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <>
      <div style={container}>
        <h1>Todos-ReactJs</h1>
        <input 
          style={{ flex: 1, width: '100%', marginBottom: '10px', padding: 10, boxSizing: 'border-box' }}
          placeholder='Type a todo and hit Enter' 
          value={inputText} 
          onChange={handleInputChange} 
          onKeyDown={addTodo}></input>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px', width: '100%' }}>
          <div style={{marginLeft: 2}}>{remainingCount} remianing</div>
          <button onClick={uncheckAll}>Clear Completed Todos</button>
        </div>
        
        <div style={{width: '100%', marginTop: 15}}>
          <input 
            style={{marginLeft: 0}}
            type="checkbox" 
            checked={remainingCount === 0} 
            onChange={checkAll} />Mark All Done
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
        {todos?.map((todo, idx) => (
          <li style={{display: 'block', border:'1px solid gray', width: 'inherit'}} key={idx}>
            <input type="checkbox" checked={todo.checked} onChange={() => checkTodo(idx)} />
            <input style={{border: 'none', backgroundColor: 'inherit'}} type='text' disabled value={todo.content}/>
          </li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App
