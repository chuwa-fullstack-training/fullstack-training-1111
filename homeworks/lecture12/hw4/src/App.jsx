import { useState } from 'react'
import './App.css'

function App() {
  const [ordinal, setOrdinal] = useState('');

  const getOrdinal = (n) => {
    if (!n || isNaN(n)) return '';
    let ord = 'th';

    if (n % 10 == 1 && n % 100 != 11) {
      ord = 'st';
    } else if (n % 10 == 2 && n % 100 != 12) {
       ord = 'nd';
    } else if (n % 10 == 3 && n % 100 != 13) {
      ord = 'rd';
    }
    return ord;
  };

  const changeInput = (e) => {
    const value = e.target.value;
    setOrdinal(value + getOrdinal(value));
  };

  return (
    <>
      <input onChange={changeInput}></input>
      <input value={ordinal}></input>
    </>
  )
}

export default App
