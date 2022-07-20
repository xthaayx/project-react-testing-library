import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';
import pokemons from '../data';

describe('Testando Pokemon', () => {
  const { id,
    name,
    type,
    averageWeight: { value, measurementUnit },
    image } = pokemons[0];
  test('Teste se é renderizado as informações de determinado pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toHaveTextContent(name);

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent(type);

    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toHaveTextContent(`${value} ${measurementUnit}`);

    const imgPokemon = screen.getByAltText(`${name} sprite`);
    expect(imgPokemon.src).toBe(image);
  });

  test('Teste se o card do pokémon contém um link de navegação', () => {
    const customHistory = createMemoryHistory();
    render(<Router history={ customHistory }><App /></Router>);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    customHistory.push(`/pokemons/${id}`);
  });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const linkDetails = screen.getByRole('link', {
      name: /more details/i });
    userEvent.click(linkDetails);

    const checkboxFavorites = screen.getByText(/pokémon favoritado/i);
    userEvent.click(checkboxFavorites);

    const imgFavorites = screen.getByAltText(`${name} is marked as favorite`);
    expect(imgFavorites).toHaveAttribute('src', '/star-icon.svg');
  });
});
