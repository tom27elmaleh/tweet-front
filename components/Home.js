import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.leftSection}>
        <div className={styles.logo}>
        <Image src="/bird-logo-left-section.png"  
          alt="Logo"
          width={90}
          height={90}
        />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userPhoto}>
          <Image src="/bird-logo-left-section.png"  
            alt="Logo"
            width={70}
            height={70}
          />
          </div>
          <div className={styles.userName}>
            <p>John</p>
            <p>@JohnCena</p>
          </div>
        </div>
      </div>

      <div className={styles.topSection}>
        TOP SECTION
      </div>
      <div className={styles.tweetSection}>
        TWEET SECTION
      </div>  
      <div className={styles.trendsSection}>
        TRENDS SECTION
      </div>
    </div>
  );
}

export default Home;
