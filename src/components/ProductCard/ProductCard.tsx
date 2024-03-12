import React from 'react';
import AddToCartButton from '../Shop/AddToCartButton';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onHover: () => void;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onHover, addToCart }) => {
  return (
    <div className="product-card" onMouseEnter={onHover} onMouseLeave={onHover}>
      <img src={`https://placekitten.com/200/200?image=${product.id}`} alt={`Product ${product.id}`} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <AddToCartButton itemId={product.id} quantity={1} addToCart={() => addToCart(product)} />
      </div>
    </div>
  );
};

export default ProductCard;
