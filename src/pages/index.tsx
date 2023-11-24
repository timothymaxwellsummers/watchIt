import Image from 'next/image';
import SecondHand from '../components/SecondHand';
import styles from '../styles/index.module.css'; // Ensure you have this CSS module

export default function Home() {
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
      <SecondHand />
    </main>
  );
}
