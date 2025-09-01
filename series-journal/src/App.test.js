// src/App.test.js (Código Corrigido)
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // 1. Importe o BrowserRouter
import App from './App';

test('renders the main application with the navigation', () => {
  // 2. Envolva o <App> com o <BrowserRouter>
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // 3. Verifique se um dos links de navegação está presente
  const linkElement = screen.getByText(/Página Inicial/i);
  expect(linkElement).toBeInTheDocument();
});