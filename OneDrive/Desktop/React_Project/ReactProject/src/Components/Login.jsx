import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase_config";
import { GetLoginData } from '../ServiceLayer/Api';
import { toast } from "react-toastify";

const Login = () => {
  const [data1, setData1] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData1({ ...data1, [e.target.name]: e.target.value });
  };

  const payload = {
    method:"POST",
    headers : {"Content-type":"Application/json"},
    body : JSON.stringify(data1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    GetLoginData(payload).then(x=>{
      if(x && x.status=== 200){
        const token = x.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(x.user));
          toast.success("Login successful!");
          navigate("/Home");
      }
      else{
       toast.error('Invalid User')
      }
    }).catch(err=>console.error(err))

    try {
      await signInWithEmailAndPassword(auth, data1.email, data1.password);
      console.log("Email/Password Login successful!");
      navigate('/Home');
    }
     catch (error) {
      // alert(error.message);
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Login successful!");
      navigate('/Home');
    } catch (error) {
      alert(error.message);
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2 className='sign-in'>Sign in</h2>
        <div className="input-field">
          <FontAwesomeIcon icon={faEnvelope} className='icons' />
          <input type="email" placeholder="Email" className="input" name='email' value={data1.email} onChange={handleChange} required />
        </div>
        <div className="input-field">
          <FontAwesomeIcon icon={faLock} className='icons' />
          <input type="password" placeholder="Password" className="input" name='password' value={data1.password} onChange={handleChange} required />
        </div>
        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>
        <div className='have-account'>
          <p>Don&apos;t have an account? <Link to='/SignUp'>Sign Up</Link></p>
        </div>
        <button type="button" className="btnn1" onClick={handleGoogleLogin}>Login with Google</button>
        <input type="submit" className="btnn" value='Login' />
      </form>
    </div>
  );
};

export default Login;
