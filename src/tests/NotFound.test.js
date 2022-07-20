import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('Testando NotFound', () => {
  test('Teste se a página contém um heading', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const headingNotFound = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(headingNotFound).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const imgNotFound = screen.getByAltText(/pikachu crying/i);
    expect(imgNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
