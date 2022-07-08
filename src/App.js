import React, { useState } from 'react';
import './App.css';
import CoinFlipper from './components/CoinFlipper';
import CoinImages from './CoinImages';


function App() {
    const [currency, setCurrency] = useState('Brazil');

    function handleChange(event) {
        setCurrency(event.target.value);
    }

    return (
        <div className="App">
            <h1>¡Coin Flip!</h1>

            Currency:
            {' '}
            <select onChange={handleChange}>
                <option>Brazil</option>
                <option>Norway</option>
                <option>US</option>
            </select>

            <CoinFlipper images={CoinImages[currency]} />
        </div>
    );
}

export default App;