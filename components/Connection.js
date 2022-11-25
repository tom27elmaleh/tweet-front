import React from 'react'
import styles from '../styles/Connection.module.css';
import { useState } from 'react';
import ModalRegister from './Modal-register'
import ModalConnection from './ModalConnection'


function Connection() {
    const [openModal, setOpenModal] = useState(false)   // signup
    const [connectModal, setConnectModal] = useState(false)  // signin


    return (
        <div>
            <main className={styles.main}>

                <div className={styles.container_home}>

                    <div className={styles.content_bg}>
                        <img className={styles.bg} src="image.png" alt="image de fond" />
                        <img className={styles.logo} src="logo.png" alt="logo" />
                    </div>

                    <div className={styles.content_right}>
                        <div className={styles.content_text}>
                            <img className={styles.small_logo} src="logo.png" alt="logo" />
                            <h1 className={styles.big_title}>See what's happening</h1>
                            < h3 className={styles.small_title}>Join Hackatweet today.</h3>
                        </div>

                        <div className={styles.buttons}>
                            {/* clicking on the button sets the modal to true, which displays it */}
                            <button className={styles.btn_signup} onClick={() => setOpenModal(true)} >Sign up</button>
                            <p className={styles.btn_text}>Already have an account ?</p>
                            <button className={styles.btn_signin} onClick={() => setConnectModal(true)}>Sign in</button>
                        </div>
                    </div>
                    {/* if modal is true, display it */}
                    {openModal && <ModalRegister closeModal={setOpenModal} />}
                    {connectModal && <ModalConnection closeModal={setConnectModal} />}

                </div>

            </main>
        </div>



    );
}

export default Connection;