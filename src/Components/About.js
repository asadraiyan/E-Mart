import React from 'react'
import AboutIntroimg from '../assets/about-img1.png'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className='about-container'>
            <div className="heading-container">
                <h1 className='about-heading'>About Us</h1>
                <p className='about-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa officia repellat necessitatibus iste velit facere, cupiditate ullam porro dolorum rem quo aut laboriosam aliquam, incidunt pariatur dicta nulla commodi natus praesentium error in! Veritatis perferendis vel voluptatibus ipsa eaque incidunt ipsum quis ad laudantium tenetur, pariatur a soluta asperiores doloremque cum commodi quos dicta nostrum quaerat voluptatem assumenda. Natus eaque beatae ipsum nisi voluptatem illo deleniti consequatur tenetur ducimus.</p>
                <Link to="/Contact" className='contact-btn'>Contact</Link>
            </div>
            <div className="aboutimg-conatiner">
                <img src={AboutIntroimg} alt="AboutIntroimg" className='about-img' />
            </div>
        </div>
    )
}

export default About
