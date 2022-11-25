import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Post from './Post'
import Tweet from './Tweet';

function Home() {

  const [dataTweets, setDataTweets] = useState([]);

  const user = useSelector((state) => state.user.value);
  
  useEffect(() => {
    
    fetch(`http://localhost:3000/tweets/wR86HNHM8V8GiE4rWfDXB2jBAZiHnXL5`)
    .then(response => response.json())
    .then(data => {
      if(data){
        setDataTweets(data.tweets);
      }
    })
  }, [])

  const tweets = dataTweets.map((data, i) => {
    return <Tweet key={i}  username={data.user.username} firstname={data.user.firstname} isLiked={data.isLiked} message={data.message} date={data.date}></Tweet>
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
        <h3 style={{"color" : 'white'}}>TRENDS</h3>
        <div className={styles.trends}>
          <p className={styles.hashtag}>#hackatweet</p>
          <p className={styles.nbTweets}>2 tweets</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
