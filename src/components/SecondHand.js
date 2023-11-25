import React, { useEffect, useState } from 'react';
import handStyles from '../styles/hands.module.css';

export default function SecondHand() {
    const [degrees, setDegrees] = useState(() => {
        const currentSeconds = new Date().getSeconds();
        return currentSeconds * 6; // Initial degree based on current seconds
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDegrees(prevDegrees => prevDegrees + 6); // Add 6 degrees every second
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={handStyles.secondHandContainer} style={{ transform: `rotate(${degrees}deg)` }}>
            {/* Pivot Point */}
            <img src={"/secondHand.png"} alt="Second Hand" className={handStyles.secondHandImage}/>
        </div>
    );
}
