import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Loginimg from '../assets/login-img.jpg'

const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-img">
                    <img src={Loginimg} alt="Loginimg" className='img-login' />
                </div>
                <div className='login-box'>
                    <div className="login-heading">
                        <h1 className='log'>Login</h1>
                    </div>
                    <div className="social-icons">
                        <button className='google' ><AiOutlineGoogle className='googlefb-icon' /> Sign in with Google</button>
                        <button className='facebook'><FaFacebookF className='googlefb-icon' /> Sign in with Facebook</button>
                    </div>
                    <div className="email-container">
                        <label className='email-address'>Email Address</label>
                        <input className='email' type="text" placeholder='Enter your email' />
                        <p className='not-share'>We'll never share your email with anyone else</p>
                    </div>
                    <div className="password-container">
                        <label className='password'>Password</label>
                        <input className='pass' type="password" placeholder='Enter your password' />
                        <div className="checkbox">
                            <input type="checkbox" className='check-type' /><span className='check'>Check me out</span>
                        </div>
                    </div>
                    <button className='submit'> Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login
