import './ComponentElement.css'
import { useState } from 'react';

function ComponentElement(props) {
    const { name, color, setComponents, index, selected } = props;
    const [ cmpName, setCmpName ] = useState(name);

    const changeComponent = (e) => {
        setComponents(prev => {
            return prev.map((elem, idx) => {
                if (index === idx) {
                    return e.target.value;
                } else {
                    return elem;
                }
            })
        });
        setCmpName(e.target.value)
    };

    return (
        <div style={{backgroundColor: index === parseInt(selected) ? color : "default", gridArea: `elem-${index}`}} className="componentElement">
            <div>Component Name:</div>
            <input value={cmpName} onChange={changeComponent}></input>
        </div>
    );
}

export default ComponentElement;