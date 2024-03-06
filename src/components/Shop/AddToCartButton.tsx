import React from 'react';
import axios from 'axios';

interface AddToCartButtonProps {
    itemId: number; // Assuming each item has a unique ID
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ itemId }) => {
    const addToCart = async () => {
        try {
            // Assuming your Django API endpoint for adding to the cart is '/api/add-to-cart/'
            await axios.post(`${process.env.REACT_APP_API_TARGET}/api/add-to-cart/`, {
                itemId,
                quantity: 1, // You can modify this based on your use case
            });
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again later.');
        }
    };

    return (
        <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
