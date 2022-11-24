import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Post from './Post'
import Tweet from './Tweet';

function Home() {

  const dataTweets = [{image: 'bird-logo-left-section.png', text: 'djelzjdklezjdlkez', firstname: 'John', username: 'johntest', like: 3}, 
                      {image: 'bird-logo-left-section.png', text: 'djelzjdklezjdlkez', firstname: 'John', username: 'johntest', like: 3},
                      {image: 'bird-logo-left-section.png', text: 'djelzjdklezjdlkez', firstname: 'John', username: 'johntest', like: 3},
                      ]

  const tweets = dataTweets.map((data, i) => {
    return <Tweet key={i} {...data}></Tweet>
  })

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
        <Post></Post>
      </div>
      <div className={styles.tweetSection}>
        {tweets}
      </div>  
      <div className={styles.trendsSection}>
        TRENDS SECTION
      </div>
    </div>
  );
}

export default Home;
