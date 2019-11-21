import POKEMON from './data/pokemon/pokemon.js';
import {
  dataPokemon, ordenarAZ, ordenarNum, filterForType, filterForWeak, searchPokemon, filterForEgg,
} from './data.js';

// const dataExtraida = dataPokemon(POKEMON);

const arrayPokemon = dataPokemon(POKEMON);
// eslint-disable-next-line no-console
console.log(arrayPokemon);
const containerPokemon = document.querySelector('.contenedor');

// Funcion para generar la Plantilla de lista de pokemons
const plantilla = (array) => {
  let stringTemplate = '';
  for (let i = 0; i < array.length; i += 1) {
    stringTemplate += `
      <div id="cardPokemon" class="card">
        <p>${array[i].num}</p>
        <p>${array[i].name}</p>
        <img src="${array[i].img}"/>
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

// MODAL
const modal = document.getElementById('modal');
// const cardPokemon = document.getElementById('cardPokemon');
const span = document.getElementsByClassName('close')[0];
/*
const Funcion = () => {
  console.log('holaaaaaa');

};
// cuando le damos click cada tarjeta
containerPokemon.addEventListener('click', () => {
  Funcion();
  // utilizar map
  // modal.style.display = 'block';
});
*/
// Cuando el usuario da click fuera del modal, se debe cerrar
span.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
  if (event.tarjet === modal) {
    modal.style.display = 'none';
  }
});
