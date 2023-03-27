import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux"
const Navbar = () => {
    const state = useSelector((state) => state.HandleCart)
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const [showMediaIcons, setshowMediaIcons] = useState(true)
    const [activeClass, setActiveClass] = useState("Home")

    // console.log("state =", state)


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
                    <div className={activeClass === "Home" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Home") }}><Link to="/">Home</Link></div>
                    <div className={activeClass === "Products" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Products") }}> <Link to="Products">Products</Link></div>
                    <div className={activeClass === "About" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("About") }}> <Link to="/About">About</Link></div>
                    <div className={activeClass === "Contact" ? "active" : ""} onClick={() => { handleClick(); setActiveClass("Contact") }}>  <Link to="/Contact">Contact</Link></div>
                    <Link to="/login" className={activeClass === "Login" ? "auth-links active-auth" : "auth-links"} onClick={() => { handleClick(); setActiveClass("Login") }} ><MdLogin className='icons' />Login</Link>
                    <Link to="/signup" className={activeClass === "Register" ? "auth-links active-auth" : "auth-links"} onClick={() => { handleClick(); setActiveClass("Register") }}><FaUserPlus className='icons' />Sign Up</Link>
                    <Link to="/cart" className={activeClass === "Cart" ? "auth-links active-auth" : "auth-links"} onClick={() => { handleClick(); setActiveClass("Cart") }}><FaShoppingCart className='icons' />Cart({state.length})</Link>
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
