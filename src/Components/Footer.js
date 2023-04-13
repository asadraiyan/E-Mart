import React from 'react'
import { ImLocation2 } from "react-icons/im";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <ImLocation2 className='loc-icon' />
                        <div className="address">
                            <span>541 A/P New Haider Ganj</span>
                            <p>Campbell Road, Lucknow</p>
                        </div>
                    </div>
                    <div className="phone">
                        <p><FiPhoneOutgoing className='loc-icon' />
                            <span className='phn'>8181079906</span>
                        </p>
                    </div>
                    <div className="email-id">
                        <p><GrMail className='loc-icon' />
                            <span className='mail'> asadraiyan001@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="copyright">
                        <span className='build'>Unique Collection ©. All Right Reserved</span>
                        <span className='build'>Build with React Js</span>
                        <div className="social-container">
                            <a href="https://github.com/asadraiyan" target="_blank" rel="noreferrer" className="social"><FaGithub /></a>
                            <a href="https://twitter.com/raiyan_asad?t=vzNMJaOErNJDbeT5XjOR4A&s=09" target="_blank" rel="noreferrer" className="social"><FaTwitter /></a>
                            <a href="https://www.linkedin.com/in/asad-raiyan-486326188" target="_blank" rel="noreferrer" className="social"><FaLinkedin /></a>
                            <a href="https://m.facebook.com/asad.raiyan?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="social"><FaFacebookSquare /></a>
                            <a href="https://www.instagram.com/asad.raiyan/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noreferrer" className="social"><FaInstagramSquare /></a>
                        </div>
                    </div>
                </div>
                <div className="scroll">
                    <IoIosArrowUp className="scroll-button" onClick={scrollToTop} />
                    <span className='top' onClick={scrollToTop}>Top</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
