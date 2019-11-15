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
      type: array[i].type,
      img: array[i].img,
      avg_spawns: array[i].avg_spawns,
      weaknesses: array[i].weaknesses,
    });
  }
  return listPokemon;
};

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

// Funciones para ordenar
export const ordenarAZ = (array) => array.sort((a, b) => (a.name > b.name ? 1 : -1));
export const ordenarZA = (array) => ordenarAZ(array).reverse();
export const ordenarNum = (array) => array.sort((a, b) => (a.num > b.num ? 1 : -1));

/* para filtrar* usando for */

export const filtroPorTipo = (array, tipoPokemon) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const arrTipos = array[i].type;

    if (arrTipos.indexOf(tipoPokemon) !== -1) {
      newArray.push(array[i]);
    } else {
      // eslint-disable-next-line no-console
      console.log(newArray);
    }
  }
  return newArray;
};

export const filtroPorDebilidad = (array, debilidad) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const arrTipos = array[i].weaknesses;
    if (arrTipos.indexOf(debilidad) !== -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
