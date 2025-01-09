import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [remainingCount, setRemainingCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const container = {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    textAlign: 'left',
  };

  useEffect(() => {
    setRemainingCount(
      todos.reduce((acc, curr) => {
        return acc + (curr.isChecked === false ? 1 : 0);
      }, 0)
    );
  }, [todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div style={container}>
        <h1>Todos-ReactJs</h1>
        <input
          style={{
            flex: 1,
            width: '100%',
            marginBottom: '10px',
            padding: 10,
            boxSizing: 'border-box',
          }}
          placeholder="Type a todo and hit Enter"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && inputText !== '') {
              dispatch({type: 'ADD_TODO', text: inputText});
              setInputText('');
            }
          }}
        ></input>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gap: '10px',
            width: '100%',
          }}
        >
          <div style={{marginLeft: 2}}>{remainingCount} remianing</div>
          <button onClick={() => dispatch({type: 'UNCHECK_ALL'})}>
            Clear Completed Todos
          </button>
        </div>

        <div style={{width: '100%', marginTop: 15}}>
          <input
            style={{marginLeft: 0}}
            type="checkbox"
            checked={remainingCount === 0}
            onChange={() => {
              dispatch({type: 'CHECK_ALL'});
            }}
          />
          Mark All Done
        </div>

        <ul style={{listStyle: 'none', padding: 0, width: '100%'}}>
          {todos?.map((todo, idx) => (
            <li
              style={{
                display: 'block',
                border: '1px solid gray',
                width: 'inherit',
              }}
              key={idx}
            >
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => dispatch({type: 'TOGGLE_ONE', idx})}
              />
              <input
                style={{border: 'none', backgroundColor: 'inherit'}}
                type="text"
                disabled
                value={todo.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
