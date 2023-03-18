import React from 'react'
import Introimg from '../assets/bg-img2.webp'
import Products from './Products'

const Home = () => {
    return (
        <div className='homepage-container'>
            <div className="bg-container">
                <img className='intro-img' src={Introimg} alt="Introimg" />
            </div>
            <div className="content">
                <h1 className='heading'>NEW SEASON ARRIVALS</h1>
                <p className='paragraph'>CHECK OUT ALL THE TRENDS</p>
            </div>
            <Products />
        </div>
    )
}

export default Home
