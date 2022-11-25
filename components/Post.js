import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Post.module.css'

function Post() {

  const user = useSelector((state) => state.user.value)
  const [tweet, setTweet] = useState();


  function handleTweet() {
    fetch(`http://localhost:3000/tweet/${user.token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: tweet}),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          
				}
			});
  }

  return (
    <div className={styles.container}>
       <h3>Home</h3>
       <textarea  className={styles.textArea} placeholder="What's up ?" onChange={(e) =>setTweet(e.target.value)} value={tweet}></textarea>
        <div className={styles.bottomSection}>
          <span>0/300</span>
          <button className={styles.tweetButton} onClick={() => handleTweet()}>Tweet</button>
       </div>
    </div>
  )
}

export default Post