import React from 'react';
import './Coin.css';


function Coin(props) {
    let url = props.images[props.face];

    return (
        <div className="Coin">
            <img src={url} alt={props.face} />
        </div>
    );
}

export default Coin;