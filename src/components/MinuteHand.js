import React, { useEffect, useState } from 'react';
import handStyles from '../styles/hands.module.css'; // Make sure this is the correct path

export default function MinuteHand() {
    const [degrees, setDegrees] = useState(() => {
        const currentMinutes = new Date().getMinutes();
        return currentMinutes * 6; // 360 degrees / 60 minutes
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDegrees(new Date().getMinutes() * 6); // Update every minute
        }, 60000); // 60000 milliseconds = 1 minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={handStyles.minuteHandContainer} style={{ transform: `rotate(${degrees}deg)` }}>
            <img src={"/minuteHand.png"} alt="Minute Hand" className={handStyles.minuteHandImage}/>
        </div>
    );
}
