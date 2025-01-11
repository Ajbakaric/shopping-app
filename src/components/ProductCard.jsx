// src/components/ProductCard.jsx
import React, { useState } from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <div className={styles.quantityControls}>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
