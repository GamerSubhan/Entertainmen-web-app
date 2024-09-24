import MovieIcon from "../assets/logo.svg";
import "./login.css";
import React, {useRef} from "react";

export default function Login()
{
    const emailInputRef = useRef("");
    const passwordInputRef = useRef("");
    
    const submitData = () => {
        const emailMessage = document.getElementById("errorMsg");
        const passwordMessage = document.getElementById("passwordMsg");

        if(emailInputRef.current.value.trim() === "")
        {
            emailMessage.style.display = 'block';
            emailInputRef.current.style.borderBottomColor = '#FC4747';
        }
        else
        {
            emailMessage.style.display = 'none';
            emailInputRef.current.style.borderBottomColor = 'white';
        }
        
        if(passwordInputRef.current.value.trim() === "")
        {
            passwordMessage.style.display = 'block';
            passwordInputRef.current.style.borderBottomColor = '#FC4747';
        }
        else
        {
            passwordMessage.style.display = 'none';
            passwordInputRef.current.style.borderBottomColor = 'white';
        }
    }

    return (
        <>
            <img id="webLogo" width={30} height={30} src={MovieIcon} />
            <div id="registerCanvas">
                <h2>Login</h2>
                <p id="errorMsg">Can't be empty</p>
                <input ref={emailInputRef} id="emailInput" type="email" placeholder="Email Address" />
                <p id="passwordMsg">Can't be empty</p>
                <input ref={passwordInputRef} id="passwordInput" type="password" placeholder="Password" />
                <button onClick={submitData}>Login to your Account</button>
                <h4>Don't have an account? <span style={{color: "#FC4747"}}>Sign Up</span></h4>
            </div>
        </>
    );
}