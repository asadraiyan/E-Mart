import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Signupimg from '../assets/signup-img.png'

const Signup = () => {
    return (
        <>
            <div className="signup-container">
                <div className="signup-img">
                    <img src={Signupimg} alt="Signupimg" className='img-signup' />
                </div>
                <div className='signup-box'>
                    <div className="login-heading">
                        <h1 className='sign' >Sign up</h1>
                    </div>
                    <div className="social-icons">
                        <button className='google' ><AiOutlineGoogle /> Sign up with Google</button>
                        <button className='facebook'><FaFacebookF /> Sign up with Facebook</button>
                    </div>
                    <div className="user-container">
                        <label className='email-address'>User Name</label>
                        <input className='email' type="text" placeholder='Enter your email' />
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

export default Signup
