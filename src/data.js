/* Manejo de data */
// Función para mostrar los pokemones

// Funcion para extraer datos en un array pokemons
export const dataPokemon = (array) => {
  const listPokemon = [];

  for (let i = 0; i < array.length; i += 1) {
    listPokemon.push({
      id: array[i].id,
      num: array[i].num,
      name: array[i].name,
      img: array[i].img,
      type: array[i].type,
      height: array[i].height,
      weight: array[i].weight,
      candy: array[i].candy,
      avg_spawns: array[i].avg_spawns,
      weaknesses: array[i].weaknesses,
      candyCount: array[i].candy_count,
      egg: array[i].egg,
      spawnTime: array[i].spawn_time,
    });
  }
  return listPokemon;
};

// Funciones para ordenar de AZ, ZA y del 1-151
export const ordenarAZ = (array) => array.sort((a, b) => (a.name > b.name ? 1 : -1));
export const ordenarNum = (array) => array.sort((a, b) => (a.id > b.id ? 1 : -1));
// Funcion para ordenar por Aparaición
export const ordenarSpaw = (array) => array.sort((a, b) => (a.avg_spawns < b.avg_spawns ? 1 : -1));

/* para filtrar por tipo, debilidad y la distancia de huevos */
export const filterForType = (array, tipoPokemon) => (
  array.filter((obj) => (obj.type.indexOf(tipoPokemon) !== -1))
);

export const filterForWeak = (array, debilidad) => (
  array.filter((obj) => obj.weaknesses.indexOf(debilidad) !== -1)
);
export const filterForEgg = (array, distancia) => (
  array.filter((obj) => obj.egg.indexOf(distancia) !== -1)
);
// Buscar Pokemon
export const searchPokemon = (array, pokemon) => (
  array.filter((obj) => obj.name.toLowerCase().indexOf(pokemon) !== -1)
);


/*
// Funcion donde usa data de pokemon.json

export const traer = (contenido) => {
  fetch('./data/pokemon/pokemon.json')
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.pokemon[0]);
      for (let i = 0; i < data.pokemon.length; i += 1) {
        // eslint-disable-next-line no-param-reassign
        contenido.innerHTML += `
      <img src="${data.pokemon[i].img}">
      <h5>Nombre: ${data.pokemon[i].name}</h5>
      <h5>Numero: ${data.pokemon[i].num}</h5>
      <h5>Tipo: ${data.pokemon[i].weaknesses}</h5>
      `;
      }
    });
};

*/
