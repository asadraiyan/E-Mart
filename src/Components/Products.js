import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import CardContent from './CardContent'

const Products = () => {
	const [data, setData] = useState()
	const [filteredData, setFilteredData] = useState()
	const [loading, setLoading] = useState(false)
	const [activeBtn, setActiveBtn] = useState("Gallery")
	let componentMounted = true
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true)
			const response = await fetch("https://fakestoreapi.com/products")
			if (componentMounted) {
				setData(await response.clone().json())
				setFilteredData(await response.json())
				setLoading(false)
				// console.log(filteredData)
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
		console.log("data =", data)
		const updatedList = data.filter((x) => x.category === filterCategory)
		setFilteredData(updatedList)
	}

	// console.log("filteredData =", filteredData)

	const ShowProducts = () => {
		return (
			<>
				<div className="btn-container">
					<button className={`btn-icons ${activeBtn === "Gallery" && "active-btn"}`} onClick={() => { setFilteredData(data); setActiveBtn("Gallery") }}>Gallery</button>
					<button className={`btn-icons ${activeBtn === "men's clothing" && "active-btn"}`} onClick={() => { filterProduct("men's clothing"); setActiveBtn("men's clothing") }}>Men's Clothing</button>
					<button className={`btn-icons ${activeBtn === "women's clothing" && "active-btn"}`} onClick={() => { filterProduct("women's clothing"); setActiveBtn("women's clothing") }}>Women's Clothing</button>
					<button className={`btn-icons ${activeBtn === "jewelery" && "active-btn"}`} onClick={() => { filterProduct("jewelery"); setActiveBtn("jewelery") }}>Jewellery</button>
					<button className={`btn-icons ${activeBtn === "electronics" && "active-btn"}`} onClick={() => { filterProduct("electronics"); setActiveBtn("electronics") }}>Electronics</button>
				</div>
				<div className="card-wrapper">
					{
						Array.isArray(filteredData) && filteredData.map((product) => {
							return (
								<>
									<CardContent product={product} key={product.id} />
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
