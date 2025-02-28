import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faEnvelope, faLock, faPhone)
import { image6 } from '../assets/images'
import { Link } from 'react-router-dom'
const Login = () => {
    const [data1,setData1]=React.useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setData1({...data1,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data1)
    }
  return (
    <>
        <div className="login-container">
            <div>
                <img src={image6} alt="" height={500} width={500} />
            </div>
            <form action="" onSubmit={handleSubmit}>
            <h2 className='sign-in'>Sign in</h2>
                <div className="input-field">
                    <FontAwesomeIcon icon={faEnvelope} className='icons' />
                    <input type="email" placeholder="Email" className="input" name='Email' value={data1.email} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className='icons' />
                    <input type="password" placeholder="Password" className="input" name='password' value={data1.password} onChange={handleChange} />
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
                <button className="btnn1">Login with Google</button>
                <Link to='/Home'>
                <input type="submit" className="btnn" value='Login'   />
                </Link>
            </form>
        </div>
    </>
  )
}

export default Login
