// src/pages/Shop.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { CartContext } from '../context/CartContext';
import Shop from './Shop';
import { vi } from 'vitest';

test('renders the Shop page with products', async () => {
  // Mock product data
  const products = [
    { id: 1, title: 'Product 1', price: 20 },
    { id: 2, title: 'Product 2', price: 30 },
  ];

  // Mock fetch function
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(products),
    })
  );

  // Mock CartContext
  const addToCart = vi.fn();

  // Render the Shop component
  render(
    <CartContext.Provider value={{ addToCart }}>
      <Shop />
    </CartContext.Provider>
  );

  // Wait for the products to appear
  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });
});
