import React, { useEffect, useState } from 'react'; // Import your second hand image
import handStyles from '../styles/hands.module.css';

export default function SecondHand() {
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(new Date().getSeconds());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const rotationDegree = seconds * 6; // 360 degrees / 60 seconds / replace 100 with 6

    return (
        <div className={handStyles.secondHandContainer} style={{ transform: `rotate(${rotationDegree}deg)` }}>
            <img src={"/secondHand.png"} alt="Second Hand" className={handStyles.secondHandImage}/>
        </div>
    );
}
