import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { delCart } from "../Components/redux/action/Index"
import { GrClose } from "react-icons/gr";


const Cart = () => {
    const state = useSelector((state) => state.HandleCart)
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const cartItems = (cartItem) => {
        return (
            <>
                <div className='main-container' key={cartItem.id}>
                    <div className="product-box">
                        <img src={cartItem.image} alt={cartItem.title} className='product-img' />
                    </div>
                    <div className="product-details">
                        <h2 className='proname'>{cartItem.title}</h2>
                        <h3 className='total-price'>$ {cartItem.price}</h3>
                        <div className="update-btn">
                            <button className='inc-dec'>+</button>
                            <button className='inc-dec'>-</button>
                        </div>
                    </div>
                    <GrClose className='close-icon' onClick={() => handleClose(cartItem)} />

                </div >
            </>
        )
    }

    const emptyCart = () => {
        return (
            <>
                <div className="main-container">
                    <h1 className='empty-cart'>Your Cart is empty !</h1>
                </div>
            </>
        )
    }

    const button = () => {
        return (
            <>
                <div className="proceed-container">
                    <button className='proceed'>Proceed to check out</button>
                </div>
            </>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}

        </>
    )


}

export default Cart
