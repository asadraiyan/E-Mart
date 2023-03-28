import React from 'react'
import AboutIntroimg from '../assets/about-img1.png'
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const About = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
    return (
        <div className='about-container'>
            <div className="aboutimg-conatiner">
                <img src={AboutIntroimg} alt="AboutIntroimg" className='about-img' />
            </div>
            <div className="heading-container">
                <h1 className='about-heading'>About Us</h1>
                <p className='about-content'>{isMobile ? ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged") : (
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                )}</p>
                <Link to="/Contact" className='contact-btn'>Contact</Link>
            </div>

        </div>
    )
}

export default About
