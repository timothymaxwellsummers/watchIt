import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SecondHand from '../components/SecondHand';
import MinuteHand from '../components/MinuteHand';
import HourHand from '../components/HourHand';
import DateDisplay from '../components/Date';
import styles from '../styles/index.module.css';
import Info from '../components/Info';
import { useStopWatch } from '../components/StopWatchContext';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { stopWatchMode } = useStopWatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Keep increasing degrees beyond 360
  const secondsDegrees = (currentTime.getMinutes() * 60 + currentTime.getSeconds()) * 6;
  const minutesDegrees = currentTime.getMinutes() * 6;
  const hoursDegrees = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5;

  return (
    <>
        <Info />t
        <main className={styles.mainContainer}>
          {stopWatchMode ? (
            <div>Stopwatch Mode is ON</div>
          ) : (
            <div>Normal Mode</div>
          )}
          <div className={styles.backgroundImageContainer}>
            <Image
              src="/CartierWatchfaceTrans.png" // Replace with your image path
              alt="Background"
              layout="fill" // This makes the image fill the container
              objectFit="cover" // This keeps the aspect ratio and covers the area
            />
            <DateDisplay />
          </div>
          <HourHand degrees={hoursDegrees} />
          <MinuteHand degrees={minutesDegrees} />
          <SecondHand degrees={secondsDegrees} />
          <div className={styles.circleSilver}></div>
          <div className={styles.circleBlack}></div>
        </main>
    </>
  );
}
