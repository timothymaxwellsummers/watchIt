import React, { useEffect, useRef } from 'react';
import handStyles from '../../styles/hands.module.css';
import hourStyles from '../../styles/hourHand.module.css';

export default function HourHand({ degrees, name }) {
    const containerRef = useRef(null);
    const prevDegrees = useRef(degrees);

    useEffect(() => {
        const changeInDegrees = Math.abs(degrees - prevDegrees.current);

        if (changeInDegrees > 10) {
            // Disable animation
            containerRef.current.style.transition = 'none';

            // Instantly jump to the desired degrees

            containerRef.current.style.transform = name === 'Cartier' ? `translateY(-90.7%) translateX(-50%) rotate(${degrees}deg)` : `translateY(-85.5%) translateX(-50%) rotate(${degrees}deg)`;

            // Force a reflow
            void containerRef.current.offsetWidth;

            // Re-enable the animation and carry on as usual
            containerRef.current.style.transition = 'transform 1s linear';
        }

        prevDegrees.current = degrees;
    }, [degrees]);

    // Style for rotating the minute hand
    const rotationStyleCartier = {
        transform: `translateY(-90.7%) translateX(-50%) rotate(${degrees}deg)`,
        filter: `drop-shadow(${Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5}px ${Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5}px 2px #5e5e5e)`
    };

    const rotationStyleSeamaster = {
        transform: `translateY(-85.5%) translateX(-50%) rotate(${degrees}deg)`,
        filter: `drop-shadow(${Math.sin((degrees - 90) * (Math.PI / 180)) * 2.5}px ${Math.cos((degrees - 90) * (Math.PI / 180)) * 2.5}px 2px #001132)`
    };

    return (
        <>
        { name === "Cartier" ? (
            <div ref={containerRef} className={hourStyles.cartierHour} style={rotationStyleCartier}>
                <img src={"/hourHand.png"} alt="Second Hand" className={handStyles.hourHandImage} />
            </div>
        ) : (
            <div ref={containerRef} className={hourStyles.seamasterHour} style={rotationStyleSeamaster}>
                <img src={"/SeamasterHourHand.png"} alt="Second Hand" className={handStyles.hourHandImage} />
            </div>
        )}
        </>
    );
}
