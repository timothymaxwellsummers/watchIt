import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SecondHand from '../components/SecondHand';
import MinuteHand from '../components/MinuteHand';
import styles from '../styles/index.module.css'; // Ensure you have this CSS module

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Keep increasing degrees beyond 360
  const secondsDegrees = (currentTime.getMinutes() * 60 + currentTime.getSeconds()) * 6;
  const minutesDegrees = currentTime.getMinutes() * 6;

  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundImageContainer}>
        <Image
          src="/CartierWatchfaceTrans.png" // Replace with your image path
          alt="Background"
          layout="fill" // This makes the image fill the container
          objectFit="cover" // This keeps the aspect ratio and covers the area
        />
      </div>
      <MinuteHand degrees={minutesDegrees} />
      <SecondHand degrees={secondsDegrees} />
      <div className={styles.circleSilver}></div>
      <div className={styles.circleBlack}></div>
    </main>
  );
}
