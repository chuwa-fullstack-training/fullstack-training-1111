import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchTodosAsync,
  createTodoAsync,
  checkAllTodos,
  uncheckAllTodos,
  togglecheck,
} from './todoSlice';

function App() {
  const {todos, loading, error, errorMessage} = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();
  const [remainingCount, setRemainingCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color: 'red'}}>Error: {errorMessage}</p>;

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
              dispatch(createTodoAsync(inputText));
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
          <button onClick={() => dispatch(uncheckAllTodos())}>
            Clear Completed Todos
          </button>
        </div>

        <div style={{width: '100%', marginTop: 15}}>
          <input
            style={{marginLeft: 0}}
            type="checkbox"
            checked={remainingCount === 0}
            onChange={() => {
              dispatch(checkAllTodos());
            }}
          />
          Mark All Done
        </div>

        <ul style={{listStyle: 'none', padding: 0, width: '100%'}}>
          {todos?.map((item) => (
            <li
              style={{
                display: 'block',
                border: '1px solid gray',
                width: 'inherit',
              }}
              key={item._id}
            >
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => dispatch(togglecheck(item._id))}
              />
              <input
                style={{border: 'none', backgroundColor: 'inherit'}}
                type="text"
                disabled
                value={item.todo}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
