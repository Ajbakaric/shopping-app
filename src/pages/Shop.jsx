// src/pages/Shop.jsx
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import styles from './Shop.module.css';

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.spinner}>
        <div></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        <h2>Oops!</h2>
        <p>Failed to fetch products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className={styles.shopContainer}>
      <h2 className={styles.shopHeader}>Shop</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
