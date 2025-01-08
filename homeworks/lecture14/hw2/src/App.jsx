import { useState } from 'react';
import './App.css';
import Card from './Card';

export default function App() {
  const [data, setData] = useState([
    {name: 'first', color: 'white'},
    {name: 'second', color: 'white'},
    {name: 'third', color: 'white'},
    {name: 'fourth', color: 'white'},
    {name: 'fifth', color: 'white'},
    {name: 'sixth', color: 'white'},
  ]);

  const [selectedCard, setSelectedCard] = useState(data[0].name);

  const handleColorChange = (e) => {
    setData(data.map(d => {
      if(d.name == selectedCard) {
        return {...d, color: e.target.value};
      }
      return d;
    }));
    e.target.value = "";
  }

  return (
    <>
    <div className="dropdown">
      <select id="cardSelect" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)}>
        {data.map(d => (
          <option key={d.name} value={d.name}>{d.name}</option>))}
      </select>

      <select id="colorSelect"  onChange={handleColorChange}>
        <option value="" disabled selected>Choose color</option>
        <option value="antiquewhite">antiquewhite</option>
        <option value="azure">azure</option>
        <option value="blueviolet">blueviolet</option>
        <option value="chocolate">chocolate</option>
        <option value="cornflowerblue">cornflowerblue</option>
        <option value="crimson">crimson</option>
        <option value="dodgerblue">dodgerblue</option>
        <option value="forestgreen">forestgreen</option>
        <option value="navy">navy</option>
      </select>
    </div>
    <div className='grid'>
      {data.map((entry, idx) => (
        <div className='item' key={idx}>
          <Card 
            color={entry.color} 
            name={entry.name} 
            changeName={(newName) => {
              setData(data.map((e, i) => {
                if(i === idx) {
                  return { ...e, name: newName };
                }
                return e;
            }))
        }} /></div>
      ))}
    </div>
    </>
  )
};
