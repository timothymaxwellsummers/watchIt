import React from 'react';
import handStyles from '../styles/hands.module.css';

export default function MinuteHand({ degrees }) {
    const shadowX = Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5; // Shadow length and direction on X-axis
    const shadowY = Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5; // Shadow length and direction on Y-axis

    // Style for rotating the minute hand
    const rotationStyle = {
        transform: `translateY(-94.25%) translateX(-50%) rotate(${degrees}deg)`,
        filter: `drop-shadow(${shadowX}px ${shadowY}px 2px #5e5e5e)`
    };

    return (
        <div className={handStyles.minuteHandContainer} style={rotationStyle}>
            <img src={"/minuteHand.png"} alt="Minute Hand" className={handStyles.minuteHandImage} />
        </div>
    );
}
