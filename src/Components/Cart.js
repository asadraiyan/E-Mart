import { useSelector, useDispatch } from "react-redux"
import { addCart, delCart, removeProduct } from "../Components/redux/action/Index"
import { GrClose } from "react-icons/gr";


const Cart = () => {
    const state = useSelector((state) => state.HandleCart)
    const dispatch = useDispatch()
    console.log("state =", state)
    const handleClose = (product) => {
        console.log("product =", product)
        dispatch(removeProduct(product))
    }

    const addItem = (product) => {
        dispatch(addCart(product))
    }
    const deleteItem = (product) => {
        dispatch(delCart(product))
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
                        <h3 className='total-price'>{cartItem.qty} x $ {cartItem.price} = $ {(cartItem.qty * cartItem.price).toFixed(2)}</h3>
                        <div className="update-btn">
                            <button className='inc' onClick={() => addItem(cartItem)}>+</button>
                            <span className='item-qty'>{cartItem.qty}</span>
                            <button className='dec' onClick={() => deleteItem(cartItem)}>-</button>
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
