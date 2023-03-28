import React, { useState, useEffect } from 'react'
import { BiStar } from "react-icons/bi";
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from './redux/action/Index';
import { BiArrowBack } from "react-icons/bi";

const ProductCard = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const state = useSelector((state) => state.HandleCart)


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const dispatch = useDispatch()

    const handleCart = (product) => {
        dispatch(addCart(product))
    }

    const addItem = (product) => {
        dispatch(addCart(product))
    }

    const deleteItem = (product) => {
        dispatch(delCart(product))
    }

    const productQty = state.find(stateProduct => stateProduct.id === product.id)?.qty

    const ShowProduct = () => {
        return (
            <>
                <Link to="/Products"><BiArrowBack className="go-back" /></Link>
                <div className="box-container">
                    <div className="img-box">
                        <img src={product.image} className='box-img' alt={product.title} />
                    </div>
                    <div className="desc-container">
                        <h4 className='head'>{product.category?.toUpperCase()}</h4>
                        <p className='title'>{product.title}</p>
                        <p className='product-rating'>Rating {product.rating && product.rating.rate}<BiStar /></p>
                        <h3 className='product-price'>$ {product.price}</h3>
                        <p className='product-desc'>{product.description}</p>
                        <div className='qty-box'>
                            {productQty > 0 ? (
                                <div className="update-btn">
                                    <button className='inc' onClick={() => addItem(product)}>+</button>
                                    <span className='item-qty'>{productQty}</span>
                                    <button className='dec' onClick={() => deleteItem(product)}>-</button>
                                </div>
                            ) : (
                                <button className='button-btn' onClick={() => handleCart(product)}>Add to cart</button>
                            )}
                            <Link to="/cart" className='button-btn'>Go to cart</Link>
                        </div>

                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loader /> : <ShowProduct />}
                </div>
            </div>

        </div>
    )
}

export default ProductCard
