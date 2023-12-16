import React, { useEffect, useState } from 'react';
import Cartier from '../components/WatchFaces/Cartier';
import { useStopWatch } from '../components/StopWatchContext';
import Slider from "react-slick";

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

  // Settings for react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  };

  // Keep increasing degrees beyond 360
  const secondsDegrees = stopWatchMode ? (elapsedTime / 1000) * 6 : (currentTime.getMinutes() * 60 + currentTime.getSeconds()) * 6;
  const minutesDegrees = currentTime.getMinutes() * 6;
  const hoursDegrees = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5;

  return (
    <div style={{ position: 'relative', height: '98vh', width: '98vw' }}>
      <Slider {...settings}>
        <Cartier secondsDegrees={secondsDegrees} minutesDegrees={minutesDegrees} hoursDegrees={hoursDegrees}/>
        <Cartier secondsDegrees={secondsDegrees} minutesDegrees={minutesDegrees} hoursDegrees={hoursDegrees}/>
      </Slider>
    </div>
  );
}
