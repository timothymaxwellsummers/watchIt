import React from 'react';
import handStyles from '../styles/hands.module.css';

export default function MinuteHand({ degrees }) {
    return (
        <div className={handStyles.minuteHandContainer} style={{ transform: `rotate(${degrees}deg)` }}>
            <img src={"/minuteHand.png"} alt="Minute Hand" className={handStyles.minuteHandImage}/>
        </div>
    );
}
