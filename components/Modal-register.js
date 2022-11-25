import React from "react";
import styles from "../styles/ModalRegister.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function Modal({ closeModal }) {
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpFirstName, setSignUpFirstName] = useState("");
    const [errormessage, seterrormessage] = useState("");
    const router = useRouter();

    const signup = async () => {
        if (!signUpUsername || !signUpPassword || !signUpFirstName) {
            // check for empty fields
            seterrormessage("Please fill out all fields")
            return;
        }

        // const signupdata = await fetch(`http://localhost:3000/user/signup`, {
        const signupdata = await fetch(`http://localhost:3000/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: signUpUsername,
                password: signUpPassword,
                firstname: signUpFirstName
            }),
        }).then(res => res.json())

        if (signupdata.result) {
            // signup successful
            console.log(signupdata);
            seterrormessage("");  
            router.push("/home"); 
        } else {
            // signup 
            console.log(signupdata);
            seterrormessage(signupdata.msg);
        }

        // NOTE: if user signed up successfully, display next page
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.deleteBtn}>
                <button className={styles.delete_btn} onClick={() => closeModal(false)}> X </button>
            </div>
            <div className={styles.modalContainer}>

                <div>
                    <img className={styles.modalLogo} src="logo.png" alt="logo" />
                </div>
                <div className={styles.modaltitle}>
                    <span>Create your hackatweet account</span>
                </div>
                <input className={styles.firstname} onChange={e => setSignUpFirstName(e.target.value)} type="text" placeholder="Firstname" id="signUpFirstName" />
                <input className={styles.username} onChange={e => setSignUpUsername(e.target.value)} type="text" placeholder="Username" id="signUpUsername" />
                <input className={styles.password} onChange={e => setSignUpPassword(e.target.value)} type="password" placeholder="Password" id="signUpPassword" />
                <button className={styles.btn_register} onClick={() => signup()} id="register">Sign up</button>
                <span className={styles.error} >{errormessage}</span>
            </div>
        </div>
    );
}

export default Modal;