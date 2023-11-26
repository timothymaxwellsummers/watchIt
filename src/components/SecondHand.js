import React from 'react';
import handStyles from '../styles/hands.module.css';

export default function SecondHand({ degrees }) {
    return (
        <div className={handStyles.secondHandContainer} style={{ transform: `rotate(${degrees}deg)` }}>
            <img src={"/secondHand.png"} alt="Second Hand" className={handStyles.secondHandImage}/>
        </div>
    );
}
