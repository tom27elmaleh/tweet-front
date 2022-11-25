import Image from 'next/image'
import React from 'react'
import styles from '../styles/Tweet.module.css'

function Tweet(props) {
  return (
    <div className={styles.container}>
        <div className={styles.topSection}>
            <Image src="/bird-logo-left-section.png"  
            alt="Logo"
            width={50}
            height={50}
            />
            <span className={styles.firstname}>{props.firstname}</span>
            <span className={styles.username}>@{props.username}</span>
            <span className={styles.date}>- {props.date}</span>
        </div>
        <p>{props.message}</p>
        <span>{props.isLiked} like</span>

    </div>
  )
}

export default Tweet