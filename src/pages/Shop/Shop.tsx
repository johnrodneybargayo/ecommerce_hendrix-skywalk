import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header/Header';
import axios from 'axios';
import { useCart } from '../../components/Shop/CartContext';
import AddToCartButton from '../../components/Shop/AddToCartButton';

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [shopData, setShopData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_TARGET}/api/shop/`);
        setShopData(response.data);
      } catch (error) {
        console.error('Error fetching shop data from Django:', error);
        setError('Error fetching shop data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item: any) => {
    addToCart({ id: item.id, name: item.name, price: item.price }); // Adjust product properties
    console.log(`Adding item with id ${item.id} to cart`);
  };

  return (
    <div>
      <Header />
      <h2>Shop Page</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {shopData && shopData.items && shopData.items.map((item: any) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <AddToCartButton
            itemId={item.id}
            quantity={1}
            addToCart={() => handleAddToCart(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;
