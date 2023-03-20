import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Signup = () => {
    return (
        <div className='signup-box'>
            <div className="login-heading">
                <h1>Sign up</h1>
            </div>
            <hr />
            <div className="social-icons">
                <button className='google' ><AiOutlineGoogle /> Sign up with Google</button>
                <button className='facebook'><FaFacebookF /> Sign up with Facebook</button>
            </div>
            <label className='email-address'>User Name</label>
            <input className='email' type="text" placeholder='Enter your email' />
            <label className='email-address'>Email Address</label>
            <input className='email' type="text" placeholder='Enter your email' />
            <p className='not-share'>We'll never share your email with anyone else</p>
            <label className='password'>Password</label>
            <input className='pass' type="password" placeholder='Enter your password' />
            <div className="checkbox">
                <input type="checkbox" className='check-type' /><span className='check'>Check me out</span>
            </div>
            <button className='submit'> Submit</button>
        </div>
    )
}

export default Signup
