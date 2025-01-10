import { Link } from 'react-router-dom'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Homework 15</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/hw1">HW 1</Link>
          <Link to="/hw2">HW 2</Link>
        </div>
      </header>
    </div>
  )
}

export default App
