import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

test('renders portfolio app', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/ARUN N SHET/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
