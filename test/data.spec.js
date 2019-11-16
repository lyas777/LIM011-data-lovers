// importamos la función `example`
// eslint-disable-next-line import/named
import { dataPokemon, ordenarAZ } from '../src/data';

const input = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    type: ['Grass', 'Poison'],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    type: ['Grass', 'Poison'],
    height: '0.99 m',
    weight: '13.0 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
    avg_spawns: 4.2,
    spawn_time: '07:00',
    multipliers: [1.2, 1.6],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    type: ['Grass', 'Poison'],
    height: '2.01 m',
    weight: '100.0 kg',
    candy: 'Bulbasaur Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '11:30',
    multipliers: null,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
];
const output = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    avg_spawns: 69,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    type: ['Grass', 'Poison'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    avg_spawns: 4.2,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    type: ['Grass', 'Poison'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    avg_spawns: 1.7,
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
];
const input1 = [
  { name: 'Bulbasaur' },
  { name: 'Ivysaur' },
  { name: 'Venusaur' },
  { name: 'Charmander' },
];
const output1 = [
  { name: 'Bulbasaur' },
  { name: 'Charmander' },
  { name: 'Ivysaur' },
  { name: 'Venusaur' },
];
describe('dataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon).toBe('function');
  });
  it('Debería pintar todos los pokemones', () => {
    expect(dataPokemon(input)).toStrictEqual(output);
  });
});
describe('ordenarAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
  it('Debería ordenar los pokemones', () => {
    expect(ordenarAZ(input1)).toEqual(output1);
  });
});
