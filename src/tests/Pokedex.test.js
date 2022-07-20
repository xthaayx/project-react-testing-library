// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import App from '../App';

// describe('Testando Pokedex', () => {
//   test('Teste se a página contém um heading', () => {
//     render(<MemoryRouter><App /></MemoryRouter>);
//     const headingEncountered = screen.getByRole('heading', {
//       name: /Encountered pokémons/i, level: 2 });
//     expect(headingEncountered).toBeInTheDocument();
//   });

//   test('Teste se é exibido o próximo pokémon da lista', () => {
//     render(<MemoryRouter><App /></MemoryRouter>);
//     const buttonNextPokemon = screen.getByRole('button', {
//       name: /Próximo pokémon/i });
//     expect(buttonNextPokemon).toBeInTheDocument();
//   });
// });
