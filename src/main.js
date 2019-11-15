import POKEMON from './data/pokemon/pokemon.js';
import {
  dataPokemon, ordenarAZ, ordenarZA, ordenarNum, filtroPorTipo, filtroPorDebilidad,
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

// Ordenar
selectOrder.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectOrder.value);
  if (selectOrder.value === 'A-Z') {
    containerPokemon.innerHTML = plantilla(ordenarAZ(arrayPokemon));
  } else if (selectOrder.value === 'Z-A') {
    containerPokemon.innerHTML = plantilla(ordenarZA(arrayPokemon));
  } else if (selectOrder.value === '1-151') {
    containerPokemon.innerHTML = plantilla(ordenarNum(arrayPokemon));
  }
});

// Filtrar por Tipo
selectType.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectType.value);
  const selectTipo = selectType.value;
  const resultadoFilterTipo = filtroPorTipo(arrayPokemon, selectTipo);
  containerPokemon.innerHTML = plantilla(resultadoFilterTipo);
});

// Filtrar por Debildiad
selectDebilidad.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectDebilidad.value);
  const selectDeb = selectDebilidad.value;
  const resultadoFilterDebilidad = filtroPorDebilidad(arrayPokemon, selectDeb);
  containerPokemon.innerHTML = plantilla(resultadoFilterDebilidad);
});
