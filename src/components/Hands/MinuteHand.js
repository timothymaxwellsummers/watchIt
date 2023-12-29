import React, { useEffect, useRef } from 'react';
import handStyles from '../../styles/hands.module.css';

export default function MinuteHand({ degrees, name }) {
    const containerRef = useRef(null);
    const prevDegrees = useRef(degrees);

    useEffect(() => {
        const changeInDegrees = Math.abs(degrees - prevDegrees.current);

        if (changeInDegrees > 10) {
            // Disable animation
            containerRef.current.style.transition = 'none';

            // Instantly jump to the desired degrees
            containerRef.current.style.transform = `translateY(-94.25%) translateX(-50%) rotate(${degrees}deg)`;

            // Force a reflow
            void containerRef.current.offsetWidth;

            // Re-enable the animation and carry on as usual
            containerRef.current.style.transition = 'transform 0.5s linear';
        }

        prevDegrees.current = degrees;
    }, [degrees]);


    // Style for rotating the minute hand
    const rotationStyle = {
        transform: `translateY(-94.25%) translateX(-50%) rotate(${degrees}deg)`,
        filter: `drop-shadow(${Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5}px ${Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5}px 2px #5e5e5e)`
    };

    return (
        <div ref={containerRef} className={handStyles.minuteHandContainer} style={rotationStyle}>
            {name === "Cartier" ? (
                <img src={"/minuteHand.png"} alt="Minute Hand" className={handStyles.minuteHandImage} />
            ) : (
                <img src={"/SeamasterMinuteHand.png"} alt="Minute Hand" className={handStyles.minuteHandImage} />
            )}
        </div>
    );
}