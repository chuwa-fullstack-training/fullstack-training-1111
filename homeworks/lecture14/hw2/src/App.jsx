import { useState } from 'react'
import './App.css'
import ComponentInput from './ComponentInput'
import ColorInput from './ColorInput'
import ComponentElement from './ComponentElement';

function App() {
  const [components, setComponents] = useState(["first", "second", "third", "forth", "fifth", "sixth"]);
  const [selected, setSelected] = useState(0);
  const [color, setColor] = useState("default");

  return (
    <>
      <div>
        <ComponentInput inputValue={components} handleSelect={setSelected}/>
        <ColorInput handleSelect={setColor}/>
      </div>
      <div className='components'>
        {
          components.map((comp, index) => {
            return (
              <ComponentElement name={comp} color={color} setComponents={setComponents} index={index} selected={selected}/>
            )
          })
        }
      </div>
      
    </>
  )
}

export default App
