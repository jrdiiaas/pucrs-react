import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the main application with the navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/PÃ¡gina Inicial/i);
  expect(linkElement).toBeInTheDocument();
});