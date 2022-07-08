import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';


function CoinFlipper(props) {
    const [face, setFace] = useState('');  // heads or tails
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);

    useEffect(() => {
        reset();
    }, [props.images]);

    function flipCoin() {
        let newFace = (Math.random() > .5) ? 'heads' : 'tails';
        setFace(newFace);

        if (newFace === 'heads') {
            setHeadsCount(count => count + 1);
        } else {
            setTailsCount(count => count + 1);
        }
    }

    function reset() {
        setFace('');
        setHeadsCount(0);
        setTailsCount(0);
    }

    return (
        <div className="CoinFlipper">
            {face && <Coin face={face} images={props.images} />}
            <p>Totals: {headsCount} heads and {tailsCount} tails</p>
            <button type="button" onClick={flipCoin}>flip!</button>
            <button type="button" onClick={reset}>reset!</button>
        </div>
    );
}

export default CoinFlipper;