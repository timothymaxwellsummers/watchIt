import React from 'react';
import handStyles from '../styles/hands.module.css';

export default function HourHand({ degrees }) {
    const shadowX = Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5; // Shadow length and direction on X-axis
    const shadowY = Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5; // Shadow length and direction on Y-axis

    return (
        <div className={handStyles.hourHandContainer} style={{ transform: `rotate(${degrees}deg)` }}>
            <img src={"/hourHand.png"} alt="Hour Hand"
                style={{ filter: `drop-shadow(${shadowX}px ${shadowY}px 2px #5e5e5e)` }}
                className={handStyles.hourHandImage} />
        </div>
    );
}
