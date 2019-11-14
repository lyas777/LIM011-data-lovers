// importamos la función `example`
// eslint-disable-next-line import/named

import { dataPokemon } from '../src/data';

describe('dataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof dataPokemon).toBe('function');
  });

  it('Debería pintar todos los pokemones', () => {
    const input = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }];
    const output = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }];
    expect(dataPokemon(input)).toBe(output);
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
