import {
  dataPokemon, ordenarAZ, ordenarNum,
  filterForType, filterForWeak, filterForEgg,
  searchPokemon, ordenarSpaw,
} from '../src/data';

const input = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.99 m',
    weight: '13.0 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
    avg_spawns: 4.2,
    spawn_time: '07:00',
    multipliers: [
      1.2,
      1.6,
    ],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    prev_evolution: [{
      num: '001',
      name: 'Bulbasaur',
    }],
    next_evolution: [{
      num: '003',
      name: 'Venusaur',
    }],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '2.01 m',
    weight: '100.0 kg',
    candy: 'Bulbasaur Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '11:30',
    multipliers: null,
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    prev_evolution: [{
      num: '001',
      name: 'Bulbasaur',
    }, {
      num: '002',
      name: 'Ivysaur',
    }],
  },
];
const output = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candyCount: 25,
    egg: '2 km',
    avg_spawns: 69,
    spawnTime: '20:00',
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    prevEvolution: undefined,
    nextEvolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.99 m',
    weight: '13.0 kg',
    candy: 'Bulbasaur Candy',
    candyCount: 100,
    egg: 'Not in Eggs',
    avg_spawns: 4.2,
    spawnTime: '07:00',
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    prevEvolution: [{
      num: '001',
      name: 'Bulbasaur',
    }],
    nextEvolution: [{
      num: '003',
      name: 'Venusaur',
    }],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '2.01 m',
    weight: '100.0 kg',
    candy: 'Bulbasaur Candy',
    candyCount: undefined,
    egg: 'Not in Eggs',
    avg_spawns: 1.7,
    spawnTime: '11:30',
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    prevEvolution: [{
      num: '001',
      name: 'Bulbasaur',
    }, {
      num: '002',
      name: 'Ivysaur',
    }],
    nextEvolution: undefined,
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
const input2 = [
  { id: 5 },
  { id: 4 },
  { id: 3 },
  { id: 2 },
];
const output2 = [
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];
const input3 = [
  { avg_spawns: 1.7 },
  { avg_spawns: 4.2 },
  { avg_spawns: 69 },
];
const output3 = [
  { avg_spawns: 69 },
  { avg_spawns: 4.2 },
  { avg_spawns: 1.7 },
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

  it('Debería ordenar los pokemones de la A a la Z', () => {
    expect(ordenarAZ(input1)).toEqual(output1);
  });
});

describe('ordenarNum', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenarNum).toBe('function');
  });
  it('Debería ordenar de manera ascendente', () => {
    expect(ordenarNum(input2)).toEqual(output2);
  });
  it('Debería ordenar los pokemones de manera descendente', () => {
    expect(ordenarNum(input2)[0].id).toEqual(2);
  });
});

describe('filterForType', () => {
  it('Debería ser una función', () => {
    expect(typeof filterForType).toBe('function');
  });
  it('Debería monstrar una lista del pokemon que coincida', () => {
    expect(filterForType(input, 'Grass')[0].type).toEqual(['Grass', 'Poison']);
  });
});

describe('filterForWeak', () => {
  it('Debería ser una función', () => {
    expect(typeof filterForType).toBe('function');
  });
  it('Debería monstrar una lista del pokemon que coincida', () => {
    expect(filterForWeak(input, 'Fire')[0].weaknesses).toEqual(['Fire', 'Ice', 'Flying', 'Psychic']);
  });
});

describe('filterForEgg', () => {
  it('Debería ser una función', () => {
    expect(typeof filterForEgg).toBe('function');
  });
  it('Debería monstrar una lista segun la distancia de evolución de lo huevos', () => {
    expect(filterForEgg(input, '2 km')[0].egg).toEqual('2 km');
  });
});

describe('searchPokemon', () => {
  it('Debería ser una función', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  it('Debería hacer una busqueda', () => {
    expect(searchPokemon(input, 'LHST')).toStrictEqual([]);
  });
});
// funcion para el top de  frecuencia de los 10 primeros
describe('ordenarSpaw', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarSpaw).toBe('function');
  });

  it('Debería mostrar el top de frecuencia de aparición de los 10 primeros pokemones', () => {
    expect(ordenarSpaw(input3)).toEqual(output3);
  });

  it('Debería mostrar el resultado del indice 2 del array que almacena el promedio de aparaciones', () => {
    expect(ordenarSpaw(input)[2].avg_spawns).toEqual(1.7);
  });
});
