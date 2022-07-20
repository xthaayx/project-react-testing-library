import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Testando About', () => {
  test('teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);
    const notFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(notFavorite).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favorites = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(favorites);

    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorites);

    const favoritesPokemon = screen.getByText(/Average weight/i);
    expect(favoritesPokemon).toBeInTheDocument();
  });
});
