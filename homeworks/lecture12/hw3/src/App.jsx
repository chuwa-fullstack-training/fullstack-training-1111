import { useState } from 'react'
import './App.css'

function App() {
  const [cnt, setCnt] = useState(0);

  const plusOneBtn = () => {
      setCnt((prev) => prev + 1);
  };

  const plusTenBtn = () => {
      setCnt((prev) => prev + 10);
  };

  const plusHundredBtn = () => {
      setCnt((prev) => prev + 100);
  };

  const plusThousandBtn = () => {
      setCnt((prev) => prev + 1000);
  };

  return (
    <>
      <div>
        <button onClick={plusOneBtn}>+ 1</button>
        <button onClick={plusTenBtn}>+ 10</button>
        <button onClick={plusHundredBtn}>+ 100</button>
        <button onClick={plusThousandBtn}>+ 1000</button>
      </div>
      <div>{cnt}</div>
    </>
  )
}

export default App
