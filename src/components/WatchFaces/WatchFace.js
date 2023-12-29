import Image from 'next/image';
import SecondHand from '../Hands/SecondHand';
import MinuteHand from '../Hands/MinuteHand';
import HourHand from '../Hands/HourHand';
import DateDisplay from '../Date';
import styles from '../../styles/index.module.css';
import Info from '../Info';
import StopWatch from '../StopWatch';
import { useStopWatch } from '../StopWatchContext';

const WatchFace = ({ data, hoursDegrees, minutesDegrees, secondsDegrees }) => {
    const { stopWatchMode, elapsedTime } = useStopWatch();
    const { name, imageUrl, backgroundColor, /* other properties */ } = data;

    const style = {
        backgroundColor: backgroundColor,
        minHeight: '100vh', 
        minWidth: '100vw'
        /* other styling based on passed props */
      };

    return (
        <div style={style}>
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
                    <DateDisplay name={name}/>
                </div>
                <HourHand degrees={hoursDegrees} name={name} />
                <MinuteHand degrees={minutesDegrees} name={name} />
                <SecondHand degrees={secondsDegrees} name={name} />
                <div className={styles.circleSilver}></div>
                <div className={styles.circleBlack}></div>
            </main>
        </div >
    );
};

export default WatchFace;
