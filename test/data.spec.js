// importamos la función `example`
// eslint-disable-next-line import/named
/*
import { dataPokemon } from '../src/data';

const input = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    avg_spawns: 69,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    type: ['Grass', 'Poison',],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    avg_spawns: 4.2,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic',],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    type: ['Grass', 'Poison',],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    avg_spawns: 1.7,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic',],

  }];

describe('dataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon).toBe('function');
  });

  it('Debería pintar todos los pokemones', () => {
    expect(dataPokemon(input)).toBe(input);
  });
});


/*
describe('ordenarAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  // eslint-disable-next-line jest/no-identical-title
  it('debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
});
*/

// importamos la función `example`
// eslint-disable-next-line import/named

import { dataPokemon, ordenarAZ } from '../src/data';

const input = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }, { name: 'Charmander' }];
const output = [{ name: 'Bulbasaur' }, { name: 'Charmander' }, { name: 'Ivysaur' }, { name: 'Venusaur' }];

describe('dataPokemon', () => {
it('debería ser una función', () => {
expect(typeof dataPokemon).toBe('function');
});

it('Debería pintar todos los pokemones', () => {
expect(dataPokemon(input)).toBe(input);
});
});

describe('ordenarAZ', () => {
it('debería ser una función', () => {
expect(typeof ordenarAZ).toBe('function');
});

it('Debería ordenar los pokemones', () => {
expect(ordenarAZ(input)).toEqual(output);
});
});
