import React from 'react'
import { Link } from "react-router-dom";

const CardContent = ({ product }) => {
    return (
        <div className="card-container">
            <img src={product.image} alt={product.title} className='card-img' />
            <div className="card-body">
                <h4 className='card-title'>{product.title.substring(0, 12)}...</h4>
                <p className='price'>${product.price}</p>
                <Link to={`/Product/${product.id}`} className='buy-now'>Buy Now</Link>
            </div>
        </div>
    )
}

export default CardContent
