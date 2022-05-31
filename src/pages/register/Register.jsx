import { useRef, useState } from "react"
import "./register.scss"

const Register = () => {
const [email,setEmail] = useState("")

const emailRef = useRef

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and much more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input">
          <input type="email" placeholder="email address" ref={emailRef}/>
          <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Register