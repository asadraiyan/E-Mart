import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

const Products = () => {
	const [data, setData] = useState()
	const [filter, setFilter] = useState(data)
	const [loading, setLoading] = useState(false)
	let componentMounted = true
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true)
			const response = await fetch("https://fakestoreapi.com/products")
			if (componentMounted) {
				setData(await response.clone().json())
				setFilter(await response.json())
				setLoading(false)
				console.log(filter)
			}
			return () => {
				componentMounted = false
			}
		}
		getProducts()
	}, [])

	const Loading = () => {
		return (
			<>
				<div className="loading-container">
					<Skeleton height={350} />
				</div>
				<div className="loading-container">
					<Skeleton height={350} />
				</div>
				<div className="loading-container">
					<Skeleton height={350} />
				</div>
				<div className="loading-container">
					<Skeleton height={350} />
				</div>
			</>
		)
	}

	const filterProduct = (filterCategory) => {
		const updatedList = data.filter((x) => x.category === filterCategory)
		setFilter(updatedList)
	}
	const ShowProducts = () => {
		return (
			<>
				<div className="btn-container">
					<button className='btn-icons' onClick={() => setFilter(data)}>Gallery</button>
					<button className='btn-icons' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
					<button className='btn-icons' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
					<button className='btn-icons' onClick={() => filterProduct("jewelery")}>Jewellery</button>
					<button className='btn-icons' onClick={() => filterProduct("electronics")}>Electronics</button>
				</div>
				<div className="card-wrapper">
					{
						filter.map((product) => {
							return (
								<>
									<div className="card-container" key={product.id}>
										<img src={product.image} alt={product.title} className='card-img' />
										<div className="card-body">
											<h4 className='card-title'>{product.title.substring(0, 12)}...</h4>
											<p className='price'>${product.price}</p>
											<button className='buy-now'>Buy Now</button>
										</div>
									</div>
								</>
							)
						})
					}
				</div>




			</>
		)

	}
	return (
		<div className='product-container'>
			<div className="latest">
				<h1>Latest Products</h1><hr />
			</div>
			<div className="boxes">
				{loading ? <Loading /> : <ShowProducts />}
			</div>
		</div>
	)
}

export default Products
