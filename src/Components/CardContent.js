import React from 'react'

const CardContent = ({ product }) => {
    return (
        <div className="card-container">
            <img src={product.image} alt={product.title} className='card-img' />
            <div className="card-body">
                <h4 className='card-title'>{product.title.substring(0, 12)}...</h4>
                <p className='price'>${product.price}</p>
                <button className='buy-now'>Buy Now</button>
            </div>
        </div>
    )
}

export default CardContent
