// src/components/ProductCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard'; // Ensure default import
import { vi } from 'vitest'; // Use vi from Vitest

test('renders the ProductCard and handles quantity change', () => {
  const mockAddToCart = vi.fn();
  const product = { id: 1, title: 'Product 1', price: 20 };

  render(<ProductCard product={product} addToCart={mockAddToCart} />);

  // Check if the product title is rendered
  const productTitle = screen.getByText(/Product 1/i);
  expect(productTitle).toBeInTheDocument();

  // Simulate incrementing the quantity
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Simulate clicking "Add to Cart"
  const addToCartButton = screen.getByText(/Add to Cart/i);
  fireEvent.click(addToCartButton);

  // Check if addToCart was called with correct arguments
  expect(mockAddToCart).toHaveBeenCalledWith(product, 2);
});
