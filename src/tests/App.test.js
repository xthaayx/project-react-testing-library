import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Testando App', () => {
  test('Teste se o topo da aplicação contém links de navegação', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorites).toBeInTheDocument();
  });
});
