/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const boxWrap = {
    border: "1px solid black",
    margin: 20,
    padding: 20,
    textAlign: 'left',
}

const textInput = {
    type: 'text',
    width: '100%',
}

export default function Card({color, name, changeName}) {
    const handleChange = (e) => changeName(e.target.value);
    return (
        <div style={{...boxWrap, backgroundColor: color }}>
            <div>Component name:</div>
            <input style={textInput} value={name} onChange={handleChange}/>
        </div>
    );
};