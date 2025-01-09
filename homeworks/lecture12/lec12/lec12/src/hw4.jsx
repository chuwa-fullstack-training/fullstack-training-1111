import React, {useState} from 'react';

const MyOrdinal = () => {
    const [number, setNumber] = useState('');
    const [ordinal, setOrdinal] = useState('');

    const toOrdinal = (n) => {
        if(isNaN(n) || n === '') return '';
        n = parseInt(n, 10);
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const o = n % 100;
        return n + (suffixes[(o - 20) % 10] || suffixes[o] || suffixes[0]);
    }

    const handleInput = (e) => {
        const value = e.target.value;
        setNumber(value);
        setOrdinal(toOrdinal(value));
    }

    return (
        <div>
            <input 
                type='text'
                value={number}
                onChange={handleInput}
                placeholder='Enter a number'
            />
            <input
                type='text'
                value={ordinal}
                readOnly
            />
        </div>
    );
};

export default MyOrdinal;
