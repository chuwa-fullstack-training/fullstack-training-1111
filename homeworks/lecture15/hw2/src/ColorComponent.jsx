import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ColorComponent() {
    const { component } = useParams();
    const navigate = useNavigate();
    const [ cmpName, setCmpName ] = useState(component);
    const [ color, setColor ] = useState("default");
    const colors = ["default", "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

    const changeComponent = (e) => {
        setCmpName(e.target.value);
        navigate('/' + e.target.value);
    };

    return (
        <div style={{backgroundColor: color}} className='colorComponent'>
            <select onChange={e => setColor(e.target.value)}>
                {
                    colors.map((value) => {
                        return (
                            <option value={value} key={value}>{value}</option>
                        )
                    })
                }
            </select>
            <div>
                <div>Component Name:</div>
                <input value={cmpName} onChange={changeComponent}></input>
            </div>
        </div>
    );
}

export default ColorComponent;