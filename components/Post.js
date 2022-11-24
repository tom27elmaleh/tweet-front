import React from 'react'
import styles from '../styles/Post.module.css'

function Post() {
  return (
    <div className={styles.container}>
       <h3>Home</h3>
       <textarea  className={styles.textArea} placeholder="What's up ?"></textarea>
        <div className={styles.bottomSection}>
          <span>0/300</span>
          <button className={styles.tweetButton}>Tweet</button>
       </div>
    </div>
  )
}

export default Post