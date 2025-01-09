import React, {useState} from 'react';
import './hw2.css'

const MyPhones = () => {
    const [clicked, setClicked] = useState(null);

    const buttons = () => {

        return Array.from({ length: 20}, (_, i) => i + 1).map((number) => (
            <button
                key={number}
                className={`phone-button ${clicked === number ? 'active' : ''}`}
            onClick={() => setClicked(number)}
            >
                {number}
            </button>
        ));
    };

    return (
        <div className='phone-container'>
            <div className='status-bar'>status bar</div>
            <div className='screen'>{buttons()}</div>
        </div>
    );
};

export default MyPhones;
