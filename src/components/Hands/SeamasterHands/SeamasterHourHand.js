import React, { useEffect, useRef } from 'react';
import handStyles from '../../../styles/hands.module.css';

export default function SeamasterHourHand({ degrees }) {
    const containerRef = useRef(null);
    const prevDegrees = useRef(degrees);

    useEffect(() => {
        const changeInDegrees = Math.abs(degrees - prevDegrees.current);

        if (changeInDegrees > 10) {
            // Disable animation
            containerRef.current.style.transition = 'none';

            // Instantly jump to the desired degrees
            containerRef.current.style.transform = `translateY(-90.7%) translateX(-50%) rotate(${degrees}deg)`;

            // Force a reflow
            void containerRef.current.offsetWidth;

            // Re-enable the animation and carry on as usual
            containerRef.current.style.transition = 'transform 1s linear';
        }

        prevDegrees.current = degrees;
    }, [degrees]);

    // Style for rotating the minute hand
    const rotationStyle = {
        transform: `translateY(-90.7%) translateX(-50%) rotate(${degrees}deg)`,
        filter: `drop-shadow(${Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5}px ${Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5}px 2px #5e5e5e)`
    };

    return (
        <div ref={containerRef} className={handStyles.hourHandContainer} style={rotationStyle}>
            <img src={"/hourHand.png"} alt="Second Hand" className={handStyles.hourHandImage}/>
        </div>
    );
}
