import React from 'react'
import Introcontactimg from '../assets/contact-img.png'

const Contact = () => {
    return (
        <>
            <div className="big-container">
                <div className='contact-container'>
                    <h1 className='questions'>Have Some Questions ? </h1>
                </div>
            </div>
            <div className="form-container">
                <div className="contact-img">
                    <img src={Introcontactimg} alt="Introcontactimg" className='img-contact' />
                </div>

                <form className='form-page'>
                    <label className='label'> Your Name:</label>
                    <input className='txt' type="text" placeholder='Enter Your Name' autoComplete='off' />
                    <label className='label'>Email:</label>
                    <input className='txt' type="email" placeholder='Enter Your email' autoComplete='off' />
                    <label className='label'>Contact:</label>
                    <input className='txt' type="text" placeholder='Enter Your Phone Number' autoComplete='off' />
                    <label className='label'>Message:</label>
                    <textarea className='msg-txt' rows="6" placeholder='Type your message here'></textarea>
                    <button className='submit-btn'>Submit</button>
                </form>

            </div>
        </>
    )
}

export default Contact
