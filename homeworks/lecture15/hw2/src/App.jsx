import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {MainGrid} from './MainGrid';

export default function App() {
  const [data, setData] = useState([
    {name: 'first', color: 'white'},
    {name: 'second', color: 'white'},
    {name: 'third', color: 'white'},
    {name: 'fourth', color: 'white'},
    {name: 'fifth', color: 'white'},
    {name: 'sixth', color: 'white'},
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/:cardName"
          element={<MainGrid data={data} setData={setData} />}
        />
        <Route path="/" element={<MainGrid data={data} setData={setData} />} />
      </Routes>
    </Router>
  );
}
