import React, { useState, useEffect } from 'react'
import { BiStar } from "react-icons/bi";
import { useParams } from 'react-router-dom'
import Loader from './Loader';

const ProductCard = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
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
                        <button className='cart-btn'>Add to cart</button>
                        <button className='cart-btn'>Go to cart</button>

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
