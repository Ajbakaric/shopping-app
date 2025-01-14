// src/pages/Shop.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { CartContext } from '../context/CartContext';
import Shop from './Shop';
import { vi } from 'vitest';

describe('Shop Page', () => {
  // Mock CartContext
  const addToCart = vi.fn();

  test('renders the Shop page with products', async () => {
    // Mock success response
    const products = [
      { id: 1, title: 'Product 1', price: 20, image: 'https://example.com/product1.jpg' },
      { id: 2, title: 'Product 2', price: 30, image: 'https://example.com/product2.jpg' },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(products),
      })
    );

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

  test('shows an error message if the API call fails', async () => {
    // Mock error response
    global.fetch = vi.fn(() => Promise.reject());

    render(
      <CartContext.Provider value={{ addToCart }}>
        <Shop />
      </CartContext.Provider>
    );

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
      expect(screen.getByText(/Failed to fetch products/i)).toBeInTheDocument();
    });
  });
});
