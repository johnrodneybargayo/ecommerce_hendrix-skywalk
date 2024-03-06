// src/pages/Shop/Shop.tsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header/Header';
import axios from 'axios';
import AddToCartButton from '../../components/Shop/AddToCartButton'; // Import the AddToCartButton component

const Shop: React.FC = () => {
    const [shopData, setShopData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_TARGET}/api/shop/`);
                setShopData(response.data);
            } catch (error) {
                console.error('Error fetching shop data from Django:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <h2>Shop Page</h2>
            {shopData && (
                <div>
                    <h3>{shopData.title}</h3>
                    <p>{shopData.description}</p>
                    {/* Render shop items with Add to Cart button */}
                    {shopData.items.map((item: any) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            {/* Include the AddToCartButton component */}
                            <AddToCartButton itemId={item.id} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Shop;
