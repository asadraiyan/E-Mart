import React from 'react'
import { useSelector } from "react-redux"


const Checkout = () => {
    const state = useSelector((state) => state.HandleCart)

    let total = 0
    const itemList = (item) => {
        let itemTotal = item.qty * item.price
        total = total + itemTotal;
        return (
            <li className="list-1">
                <div className='productlist-1'>
                    <h6 className="item-title">{item.title.substring(0, 20)}...</h6>
                    <span className="price-dollar">$ {itemTotal}</span>
                </div>
            </li>
        )
    }
    return (
        <>
            <div className='checkout-container'>
                <div className="checkout-box">
                    <div className="order-details">
                        <div className="order-cart">
                            <span className="cart-head">Your cart</span>
                            <div className="cart-num">
                                <span className="cartnum">{state.length}</span>
                            </div>
                        </div>
                        <ul className="list-group">
                            {state.map(itemList)}


                            <li className="list-1">
                                <div className='totaUSD'>
                                    <span>Total (USD)</span>
                                    <strong>$ {total.toFixed(2)}</strong>
                                </div>
                            </li>
                        </ul>
                        <div className="promo-box">
                            <input type="text" className="promocode" placeholder="Promo code" />
                            <button className="redeem-btn">Redeem</button>
                        </div>
                    </div>
                    <div className="personal-details">
                        <div className="billing-container">
                            <div className="billing-add">
                                <h4 className="billing">Billing address</h4>
                            </div>
                            <div className="person-name">
                                <div className="first-name">
                                    <label for="firstName" className="label-name">First name</label>
                                    <input type="text" className="input-name" autoComplete='off' />
                                </div>
                                <div className="last-name">
                                    <label for="lastName" className="label-name">Last name</label>
                                    <input type="text" className="input-name" autoComplete='off' />
                                </div>
                            </div>
                            <div className="user-details">
                                <label for="username" className="label-username">Username</label>
                                <input type="text" className="username-input" placeholder="Username" required="" />
                                <label for="email" className="label-username">Email <span className="text-body-secondary">(Optional)</span></label>
                                <input type="email" className="username-input" placeholder="you@example.com" />
                                <label for="address" className="label-username">Address</label>
                                <input type="text" className="username-input" placeholder="1234 Main St" required="" />
                                <label for="address2" className="label-username">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                                <input type="text" className="username-input" placeholder="Apartment or suite" />
                            </div>

                            <div className="shipping-details">
                                <div className="country">
                                    <label for="country" className="label-country">Country</label>
                                    <select className="input-country" >
                                        <option value="">Choose...</option>
                                        <option>India</option>
                                    </select>
                                </div>

                                <div className="state">
                                    <label for="state" className="label-country">State</label>
                                    <select className="input-country" >
                                        <option value="">Choose...</option>
                                        <option>Uttar Pradesh</option>
                                    </select>
                                </div>
                                <div className="pincode">
                                    <label for="zip" className="label-country">Zip</label>
                                    <input type="text" className="input-country" />
                                </div>
                            </div>
                        </div>
                        <div className="payment-container">
                            <hr className="underline-1" />
                            <div className="shipping-address">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                                </div>
                            </div>
                            <hr className="underline-2" />
                            <h4 className="payment">Payment</h4>
                            <div className="credit-box">
                                <input type="radio" className="radio" />
                                <label className="label-card">Credit card</label>
                            </div>
                            <div className="debit-box">
                                <input type="radio" className="radio" />
                                <label className="label-card" >Debit card</label>
                            </div>
                            <div className="creditcard-details">
                                <div className="creditcard-name">
                                    <label for="cc-name" className="card-label">Name on card</label>
                                    <input type="text" className="credit-input" />
                                    <small className="small-text">Full name as displayed on card</small>
                                </div>
                                <div className="creditcard-number">
                                    <label for="cc-number" className="card-label">Card number</label>
                                    <input type="text" className="credit-input" />
                                </div>
                            </div>
                            <div className="creditcard-expiry">
                                <div className="card-expiry">
                                    <label for="cc-expiration" className="label-expiration">Expiration</label>
                                    <input type="text" className="expiry-input" />
                                </div>
                                <div className="card-CVV">
                                    <label for="cc-cvv" className="label-expiration">CVV</label>
                                    <input type="text" className="expiry-input" />
                                </div>
                            </div>

                            <hr className="underline-3" />
                            <div className='sbmt-container'>
                                <button className="sbmt" type="submit">Proceed to pay</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Checkout
