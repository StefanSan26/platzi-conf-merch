import React from 'react';

const Product = ({product,handleAddToCart}) => {
	return (
		<div className="Products-item">
			{/* <img src={`http://localhost:1337${product.image[0].url}`} alt={product.title} /> */}
			<img src={product.image[0].name} alt={product.title} />
			<div className="Products-item-info">
				<h2>
					{product.title}
					<span>
						$ {product.price}
					</span>
				</h2>
				<p>
					{product.description}
				</p>
			</div>
			<button type="button" onClick={handleAddToCart(product)}>Comprar</button>
		</div>
	);
};

export default Product;