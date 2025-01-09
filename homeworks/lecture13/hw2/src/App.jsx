import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('status bar');
  const btnClicked = (e) => {
    const value = e.target.id;
    setStatus(value + " clicked");
  }
  let btns = [];
  for (let i = 0; i < 5; i++) {
    const btn = [];
    for (let j = 0; j < 4; ++ j) {
      btn.push(<button key={i * 4 + j + 1} id={i * 4 + j + 1} className='numBtn' onClick={btnClicked}>{i * 4 + j + 1}</button>);
    }
    btns.push(btn);
  }

  return (
    <>
      <div className='btnBar'>
        <div className='statusBar'>{status}</div>
        {
          btns.map((btn) => {
            return (<div>{btn}</div>);
          })
        }
      </div>
    </>
  )
}

export default App
