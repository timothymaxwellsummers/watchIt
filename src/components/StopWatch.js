import React, { useState, useEffect } from 'react';
import { useStopWatch } from './StopWatchContext';
import styles from '../styles/stopWatch.module.css';
import { Button } from "@/components/ui/button";
import SpaceBarIcon from '@mui/icons-material/SpaceBar';

function Stopwatch() {
    const { isActive, setIsActive, elapsedTime, setElapsedTime } = useStopWatch();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 32) { // keyCode for space bar
                handleStartStop();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isActive]);

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
        const hundredths = ((milliseconds % 1000) / 10).toFixed(0);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')},${hundredths.padStart(2, '0')}`;
    };

    return (
        <>
            <div className={styles.stopWatchTime}>
                <p>{formatTime(elapsedTime)}</p>
            </div>
            <div className={styles.stopWatchButtonContainer}>
                <Button variant="outline" onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</Button>
                <Button variant="outline" onClick={handleReset} disabled={isActive}>Reset</Button>
            </div>
            <div className={styles.stopWatchToolTip}>
                Or press <SpaceBarIcon className={styles.space} /> to start/stop
            </div>
        </>
    );
}

export default Stopwatch;
