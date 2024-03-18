import React, { useState } from 'react';
import axios from 'axios';
import './productCard.scss';

interface Product {
  id: number;
  name: string;
  image: string; // Assuming 'image' is the URL of the product image
  description?: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = async () => {
    try {
      // Retrieve the authentication token from localStorage
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      // Set authorization headers
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      // Store product information in local storage
      localStorage.setItem('productToAddToCart', JSON.stringify(product));

      // Send product information using a POST request
      await axios.post(`${process.env.REACT_APP_API_TARGET}/cart/add/`, {
        product_id: product.id,
        quantity: 1 // You may adjust quantity as needed
      }, { headers });

      setIsAddedToCart(true);
      addToCart(product);
    } catch (error: any) {
      console.error('Error adding product to cart:', error);
      if (error.response) {
        setError(error.response.data.error || 'Error adding product to cart');
      } else {
        setError('Error adding product to cart');
      }
    }
  };

  console.log('ProductCard rendered for:', product.name);

  return (
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://placekitten.com/200/200?image=${product.id}`} alt={`Product ${product.id}`} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        {isHovered && !isAddedToCart && (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
        {isAddedToCart && <p>Added to Cart</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
