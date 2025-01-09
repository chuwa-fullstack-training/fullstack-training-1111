import React, {useState} from 'react';

const MyCounter = () => {
    const [count, setCount] = useState(0);

    const one = () => {
        setCount((prevCount) => prevCount + 1)
    };

    const ten = () => {
        setCount((prevCount) => prevCount + 10)
    };

    const hundred = () => {
        setCount((prevCount) => prevCount + 100)
    };

    const thousand = () => {
        setCount((prevCount) => prevCount + 1000)
    };

    const reset = () => {
        setCount(0);
    };


    return (
        <div className='count-container'>
            <div className='buttons'>
                <button onClick={one}>+1</button>
                <button onClick={ten}>+10</button>
                <button onClick={hundred}>+100</button>
                <button onClick={thousand}>+1000</button>
            </div>
            <div className='count-display'>{count}</div>
            <button className='reset-button' onClick={reset}>Reset</button>
        </div>
    );
};

export default MyCounter;
