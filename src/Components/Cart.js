import React from 'react'

const Cart = () => {
    return (
        <div className='main-container'>
            <div className="product-box">
                <img src="" alt="" className='product-img' />
            </div>
            <div className="product-details">
                <h2 className='proname'>Product Name</h2>
                <h3 className='total-price'>2 X $109.95 = $219.9</h3>
                <div className="update-btn">
                    <button className='inc-dec'>+</button>
                    <button className='inc-dec'>-</button>
                </div>
            </div>

        </div >
    )
}

export default Cart
