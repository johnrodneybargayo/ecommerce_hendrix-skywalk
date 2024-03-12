import React from 'react';

interface AddToCartButtonProps {
  itemId: number;
  quantity: number;
  addToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ itemId, quantity, addToCart }) => {
  return (
    <button onClick={addToCart}>
      Add to Cart ({quantity}) - Item ID: {itemId}
    </button>
  );
};

export default AddToCartButton;
