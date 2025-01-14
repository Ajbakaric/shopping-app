// src/components/Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import { CartContext } from '../context/CartContext';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the Navbar with correct cart count', () => {
  // Mock CartContext
  const cartItems = [
    { id: 1, title: 'Product 1', price: 20, quantity: 2 },
    { id: 2, title: 'Product 2', price: 30, quantity: 1 },
  ];

  render(
    <CartContext.Provider value={{ cartItems }}>
      <Router>
        <Navbar />
      </Router>
    </CartContext.Provider>
  );

  // Assert the cart link text
  const cartLink = screen.getByText(/🛒 Cart/i);
  expect(cartLink).toBeInTheDocument();
  expect(cartLink).toHaveTextContent('3'); // Assert the count separately
});
