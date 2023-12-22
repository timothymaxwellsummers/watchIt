import Image from 'next/image';
import SecondHand from '../SecondHand';
import MinuteHand from '../MinuteHand';
import HourHand from '../HourHand';
import DateDisplay from '../Date';
import styles from '../../styles/index.module.css';
import Info from '../Info';
import StopWatch from '../StopWatch';
import { useStopWatch } from '../StopWatchContext';

const WatchFace = ({ data, hoursDegrees, minutesDegrees, secondsDegrees }) => {
    const { stopWatchMode, elapsedTime } = useStopWatch();
    const { imageUrl, backgroundColor, /* other properties */ } = data;

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
                        src={imageUrl} // Replace with your image path
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
};

export default WatchFace;
