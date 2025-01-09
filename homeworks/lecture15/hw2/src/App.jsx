import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ColorComponent from './ColorComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/:component" element={<ColorComponent />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
