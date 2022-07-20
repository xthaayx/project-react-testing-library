import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';

describe('Testando About', () => {
  test('Teste se a página contém um heading', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const headingAbout = screen.getByRole('heading', {
      name: /about pokédex/i, level: 2 });
    expect(headingAbout).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const paragraph1 = screen.getByText(/This application simulates/i);
    expect(paragraph1).toBeInTheDocument();

    const paragraph2 = screen.getByText(/One can filter Pokémons/);
    expect(paragraph2).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const imgAbout = screen.getByRole('img');
    expect(imgAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
