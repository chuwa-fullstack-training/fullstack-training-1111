import { useState } from 'react'
import './App.css'
import Hw1 from './Hw1'
import Hw2 from './Hw2'
import Hw3 from './Hw3'

function App() {
  const [tab, setTab] = useState(1)

  return (
    <div className="App">
      <h2>Lecture 14 homeworks</h2>
      <div className="header">
        <button
          className={tab === 1 ? 'active' : ''}
          onClick={() => setTab(1)}
        >
          HW 1
        </button>
        <button
          className={tab === 2 ? 'active' : ''}
          onClick={() => setTab(2)}
        >
          HW 2
        </button>
        <button
          className={tab === 3 ? 'active' : ''}
          onClick={() => setTab(3)}
        >
          HW 3
        </button>
      </div>
      {tab === 1 && <Hw1 />}
      {tab === 2 && <Hw2 />}
      {tab === 3 && <Hw3 />}
    </div>
  )
}

export default App
