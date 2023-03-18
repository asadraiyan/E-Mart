import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const [showMediaIcons, setshowMediaIcons] = useState(true)
    const [activeClass, setActiveClass] = useState("Home")

    const handleClick = () => {
        setshowMediaIcons(!showMediaIcons)
    }
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <span>NAWAB'S COLLECTION</span>
                </div>
                <div className={isMobile ? (showMediaIcons ? "sideNav hidden" : "sideNav") : "navlink"}>
                    <div className={activeClass === "Home" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Home") }}>
                        <Link to="/">Home</Link>
                    </div>
                    <Link to="/Products" className={activeClass === "Products" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Products") }}>Products</Link>
                    <Link to="/About" className={activeClass === "About" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("About") }}>About</Link>
                    <Link to="/Contact" className={activeClass === "Contact" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Contact") }}>Contact</Link>
                    {/* <div className="login-container"> */}
                    <button className='login'><MdLogin className='icons' />Login</button>
                    <button className='register'><FaUserPlus className='icons' />Register</button>
                    <button className='cart'><FaShoppingCart className='icons' />Cart(0)</button>
                    {/* </div> */}

                </div>
                {isMobile ? (
                    <div className="menu-icons" onClick={handleClick}>
                        <i className='icons'>{showMediaIcons ? < TfiMenu /> : <TfiClose />}</i>
                    </div>
                ) : <></>}
            </nav>

        </>
    )
}

export default Navbar
