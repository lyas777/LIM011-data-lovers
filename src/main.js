import POKEMON from './data/pokemon/pokemon.js';
import {
  dataPokemon, ordenarAZ, ordenarNum, filterForType, filterForWeak, searchPokemon, filterForEgg,
} from './data.js';

// const dataExtraida = dataPokemon(POKEMON);

const arrayPokemon = dataPokemon(POKEMON);
// eslint-disable-next-line no-console
console.log(arrayPokemon);
const containerPokemon = document.querySelector('.lista-pokemones');

// Funcion para generar la Plantilla de lista de pokemons
const plantilla = (array) => {
  let stringTemplate = '';
  for (let i = 0; i < array.length; i += 1) {
    stringTemplate += `
      <div class="card">
        <img src="${array[i].img}"/>
        <p>${array[i].num}</p>
        <p>${array[i].name}</p>
        <p>Tipo: ${array[i].type}</p>
        <p>Debilidad: ${array[i].weaknesses}</p>
      </div>
    `;
  }
  return stringTemplate;
};
// Pinta la lista de pokemons
containerPokemon.innerHTML = plantilla(arrayPokemon);

// Sección para Ordenar y Filtrar
const selectOrder = document.getElementById('selectOrder');
const selectType = document.getElementById('selectType');
const selectDebilidad = document.getElementById('selectDebilidad');
const selectDistanciaHuevos = document.getElementById('selectDistanciaHuevos');

// Ordenar
selectOrder.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectOrder.value);
  if (selectOrder.value === 'A-Z') {
    containerPokemon.innerHTML = plantilla(ordenarAZ(arrayPokemon));
  } else if (selectOrder.value === 'Z-A') {
    containerPokemon.innerHTML = plantilla(ordenarAZ(arrayPokemon).reverse());
  } else if (selectOrder.value === '1-151') {
    containerPokemon.innerHTML = plantilla(ordenarNum(arrayPokemon));
  }
});

// Filtrar por Tipo
selectType.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectType.value);
  const selectTipo = selectType.value;
  const resultadoFilterTipo = filterForType(arrayPokemon, selectTipo);
  containerPokemon.innerHTML = plantilla(resultadoFilterTipo);
});

// Filtrar por Debildiad
selectDebilidad.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectDebilidad.value);
  const selectDeb = selectDebilidad.value;
  const resultadoFilterDebilidad = filterForWeak(arrayPokemon, selectDeb);
  containerPokemon.innerHTML = plantilla(resultadoFilterDebilidad);
});

selectDistanciaHuevos.addEventListener('change', () => {
  // console.log(selectDistanciaHuevos.value);
  const selectEgg = selectDistanciaHuevos.value;
  const resultadoFilterDistancia = filterForEgg(arrayPokemon, selectEgg);
  containerPokemon.innerHTML = plantilla(resultadoFilterDistancia);
});

// Buscar
const inputSearch = document.querySelector('#inputSearch');

inputSearch.addEventListener('keyup', () => {
  const pokemon = inputSearch.value.toLowerCase();
  const pokemonBuscado = searchPokemon(arrayPokemon, pokemon);
  containerPokemon.innerHTML = plantilla(pokemonBuscado);
});
/*
// Buscar pokemon
inputSearch.addEventListener('input', (event) => {
  console.log(inputSearch);
  const pokemonBuscado = searchPokemon(arrayPokemon, event.target.value);
  containerPokemon.innerHTML = plantilla(pokemonBuscado);
});
*/
