/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const boxWrap = {
  border: '1px solid black',
  margin: 20,
  padding: 20,
  textAlign: 'left',
};

const textInput = {
  type: 'text',
  width: '100%',
};

export default function Card({color, name, changeName, navigateTo}) {
  const [inputValue, setInputValue] = useState(name);
  const handleChange = (e) => {
    e.preventDefault();
    changeName(inputValue);
  };
  return (
    <div style={{...boxWrap, backgroundColor: color}}>
      <div>Component name:</div>
      <input
        style={textInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleChange}
      />
    </div>
  );
}
