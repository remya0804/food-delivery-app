import React, { useState } from 'react'
import './Login.css'
import { IoMdClose } from "react-icons/io";

const Login = ({setLogin}) => {

    const [loginstate,setLoginState] = useState('Sign Up')

  return (
    
    <div className="login">

        <form action="" className="login-form">

            <div className="login-form-title">

                <h2>{loginstate}</h2>

                <IoMdClose  onClick={() => setLogin(false)}/>

            </div>

            <div className="login-inputs">

              {loginstate==='Login' ? <></>: <input type="text" placeholder='Your Name' required /> }               
              <input type="email" placeholder='Your Email' required />
              <input type="password" placeholder='Password' required />

            </div>

            <button>{loginstate==='Sign Up' ? 'Create Account' : "Login"}</button>

            <div className="login-condition">

              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use and privacy policy.</p>
            </div>

            {
              loginstate==='Login'

              ?  <p> Create an new account? <span onClick={() => setLoginState("Sign Up")}>Click here</span></p>

              : <p> Already have an account? <span onClick={() => setLoginState("Login")}> Login Here</span></p>
            }

            
        </form>
    </div>
  )
}

export default Login