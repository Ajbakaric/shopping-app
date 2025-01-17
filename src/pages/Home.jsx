// src/pages/Home.jsx
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeader}>Welcome to My Shopping App!</h1>
      <p className={styles.homeText}>
        Browse our shop to find amazing products at great prices.
      </p>
      <img
        className={styles.homeImage}
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Shopping"
      />
    </div>
  );
}

export default Home;



