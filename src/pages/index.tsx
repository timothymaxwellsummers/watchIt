import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SecondHand from '../components/SecondHand';
import MinuteHand from '../components/MinuteHand';
import HourHand from '../components/HourHand';
import DateDisplay from '../components/Date';
import styles from '../styles/index.module.css';
import Info from '../components/Info';
import StopWatch from '../components/StopWatch';
import { useStopWatch } from '../components/StopWatchContext';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { stopWatchMode, elapsedTime } = useStopWatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if ('wakeLock' in navigator) {
      // @ts-ignore
      let wakeLock = null;

      const requestWakeLock = async () => {
        try {
          wakeLock = await navigator.wakeLock.request('screen');
          wakeLock.addEventListener('release', () => {
            // @ts-ignore
            console.log('Screen Wake Lock released:', wakeLock.released);
          });
          // @ts-ignore
          console.log('Screen Wake Lock active:', wakeLock.active);
        } catch (err) {
          // @ts-ignore
          console.error(`${err.name}, ${err.message}`);
        }
      };

      requestWakeLock();

      // Re-acquire the wake lock if the page becomes visible again.
      document.addEventListener('visibilitychange', async () => {
        // @ts-ignore
        if (wakeLock !== null && document.visibilityState === 'visible') {
          await requestWakeLock();
        }
      });
    } else {
      console.log('Screen Wake Lock API not supported');
    }
  }, []);

  // Keep increasing degrees beyond 360
  const secondsDegrees = stopWatchMode ? (elapsedTime / 1000) * 6 : (currentTime.getMinutes() * 60 + currentTime.getSeconds()) * 6;
  const minutesDegrees = currentTime.getMinutes() * 6;
  const hoursDegrees = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5;

  return (
    <>
      <Info />
      <main className={styles.mainContainer}>
        <div className={styles.backgroundImageContainer}>
          {stopWatchMode ? (
            <StopWatch />
          ) : (
            <></>
          )}
          <Image
            src="/CartierWatchface.png" // Replace with your image path
            alt="Background"
            layout="fill" // This makes the image fill the container
            objectFit="cover" // This keeps the aspect ratio and covers the area
          />
          {/* @ts-ignore */}

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
