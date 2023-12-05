import React, { useState, useEffect } from 'react';
import { useStopWatch } from './StopWatchContext';
import styles from '../styles/stopWatch.module.css';

function Stopwatch() {
    const [isActive, setIsActive] = useState(false);
    const { elapsedTime, setElapsedTime } = useStopWatch();

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setElapsedTime(prevElapsedTime => prevElapsedTime + 10); // Update in 10ms intervals
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, setElapsedTime]);

    const handleStartStop = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setElapsedTime(0);
    };

    const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const hundredths = ((milliseconds % 1000) / 10).toFixed(0); // To get 2 digits for hundredths of a second

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')},${hundredths.padStart(2, '0')}`;
    };

    return (
        <div className={styles.stopWatchContainer}>
            <h2>Stopwatch</h2>
            <p>Elapsed Time: {formatTime(elapsedTime)}</p>
            <button onClick={handleStartStop}>
                {isActive ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset} disabled={isActive}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch;
