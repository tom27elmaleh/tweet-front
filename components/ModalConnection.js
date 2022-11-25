import React from "react";
import styles from "../styles/ModalConnection.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../reducers/user";


// function takes an argument (the state) which sets the state to false, closing the modal
function Modal({ closeModal }) {
    const [signinUsername, setSigninUsername] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const [errormessage, seterrormessage] = useState("");

    const dispatch = useDispatch()


    const signin = () => {

        fetch(`http://localhost:3000/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: signinUsername,
                password: signinPassword
            }),
        }).then(res => res.json())
            .then(data => {
                if (data.result) {
                    // signin successful
                    dispatch(login({
                        username: data.username,
                        token: data.token
                    }));

                    seterrormessage("");
                    console.log('connected'); // redirect to tweet page
                } else {
                    // failed to signin

                    seterrormessage(data.error);
                }
            })


    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.deleteBtn}>
                {/* function is assigned to the button X to close the modal */}
                <button className={styles.delete_btn} onClick={() => closeModal(false)}> X </button>
            </div>
            <div className={styles.modalContainer}>

                <div>
                    <img className={styles.modalLogo} src="logo.png" alt="logo" />
                </div>
                <div className={styles.modaltitle}>
                    <span>Connect to hackatweet</span>
                </div>
                <input className={styles.username} onChange={e => setSigninUsername(e.target.value)} type="text" placeholder="Username" id="signinUsername" />
                <input className={styles.password} onChange={e => setSigninPassword(e.target.value)} type="password" placeholder="Password" id="signinPassword" />
                <button className={styles.btn_register} onClick={() => signin()} id="register">Sign in</button>
                <span className={styles.error} >{errormessage}</span>
            </div>
        </div>
    );
}

export default Modal;