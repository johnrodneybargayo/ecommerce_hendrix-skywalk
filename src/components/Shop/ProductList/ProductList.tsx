// src/components/ProductList/ProductList.tsx
import React, { useState } from 'react';
import './productList.scss'; // Import styles for the product list

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  // Sample data for demonstration
  const sampleProducts: Product[] = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 50) + 10, // Random price between 10 and 60
  }));

  const itemsPerPage = 15;
  const totalPages = Math.ceil(sampleProducts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sampleProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>

      <div className="product-items">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={`https://placekitten.com/200/200?image=${product.id}`} alt={`Product ${product.id}`} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
