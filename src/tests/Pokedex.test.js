import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando Pokedex', () => {
  test('Teste se a página contém um heading', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const headingEncountered = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2 });
    expect(headingEncountered).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo pokémon da lista', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonNextPokemon = screen.getByRole('button', {
      name: /Próximo pokémon/i });
    expect(buttonNextPokemon).toBeInTheDocument();
    userEvent.click(buttonNextPokemon);
  });

  test('Teste se é mostrado apenas um pokémon por vez', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const pokemonName = screen.getAllByTestId('pokemon-name');
    expect(pokemonName.length).toBe(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const filterLength = 7;
    const buttonFilter = screen.getAllByTestId('pokemon-type-button');
    expect(buttonFilter.length).toBe(filterLength);

    const typeFilter = screen.getByRole('button', {
      name: /psychic/i });
    expect(typeFilter).toBeInTheDocument();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const resetButton = screen.getByRole('button', {
      name: /all/i });
    expect(resetButton).toBeInTheDocument();
    userEvent.click(resetButton);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');
  });
});
