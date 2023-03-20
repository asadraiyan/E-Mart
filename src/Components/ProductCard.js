import React, { useState, useEffect } from 'react'
import { BiStar } from "react-icons/bi";
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from './redux/action/Index';

const ProductCard = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const ShowProduct = () => {
        return (
            <>
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
                        <button className='cart-btn' onClick={() => addProduct(product)}>Add to cart</button>
                        <Link to="/Cart" className='cart-btn'>Go to cart</Link>

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
