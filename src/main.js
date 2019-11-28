import POKEMON from './data/pokemon/pokemon.js';
import {
  dataPokemon, ordenarAZ, ordenarNum,
  filterForType, filterForWeak,
  searchPokemon, filterForEgg, ordenarSpaw,
} from './data.js';

// variables para extraer datos
const arrayPokemon = dataPokemon(POKEMON);
const containerPokemon = document.querySelector('.contenedor');
// variables para modal
const modal = document.getElementById('pokemon-modal');
const flex = document.getElementById('flex');
const close = document.getElementById('close');
// Sección para Ordenar y Filtrar
const selectOrder = document.getElementById('selectOrder');
const selectType = document.getElementById('selectType');
const selectDebilidad = document.getElementById('selectDebilidad');
const selectDistanciaHuevos = document.getElementById('selectDistanciaHuevos');
const selectSpwans = document.getElementById('selectSpwans');
// Buscar
const inputSearch = document.querySelector('#inputSearch');
// Funcion para generar la Plantilla de lista de pokemons
const plantilla = (array) => {
  let stringTemplate = '';
  let template = '';
  if (array.length === 0) stringTemplate = '<h2 class="alertNot"> Lo siento, no se encontraron Pokemons </h2>';
  for (let j = 0; j < array.length; j += 1) {
    template = `
      <div id="${array[j].id}" class="card">
        <figcaption class="data-text"><b>N° ${array[j].num}</b></figcaption>
        <img src="${array[j].img}"/>
        <figcaption><b>${array[j].name}</b></figcaption>
        <p class="type-icon-text">Tipo de Pokemón:</p>
    `;
    for (let i = 0; i < array[j].type.length; i += 1) {
      const pokemonType = arrayPokemon[j].type[i];
      let imageFile = '';
      switch (array[j].type[i]) {
        case 'Steal': imageFile = 'steel.png'; break;
        case 'Water': imageFile = 'water.png'; break;
        case 'Bug': imageFile = 'bug.png'; break;
        case 'Dragon': imageFile = 'dragon.png'; break;
        case 'Electric': imageFile = 'electric.png'; break;
        case 'Ghost': imageFile = 'ghost.png'; break;
        case 'Fire': imageFile = 'fire.png'; break;
        case 'Fairy': imageFile = 'fairy.png'; break;
        case 'Ice': imageFile = 'ice.png'; break;
        case 'Fighting': imageFile = 'fighting.png'; break;
        case 'Normal': imageFile = 'normal.png'; break;
        case 'Grass': imageFile = 'grass.png'; break;
        case 'Psychic': imageFile = 'psychic.png'; break;
        case 'Rock': imageFile = 'rock.png'; break;
        case 'Dark': imageFile = 'dark.png'; break;
        case 'Ground': imageFile = 'ground.png'; break;
        case 'Poison': imageFile = 'poison.png'; break;
        case 'Flying': imageFile = 'flying.png'; break;
        // no default
      }
      template += `
                  <img class="type-icon-main" src="img/${imageFile}">
                  <!--<strong class='text-tripack'>${pokemonType}</strong>-->
                  `;
    }
    // eslint-disable-next-line quotes
    template += `</div>`;
    stringTemplate += template;
  }
  return stringTemplate;
};
// Pinta la lista de pokemons
containerPokemon.innerHTML = plantilla(arrayPokemon);

// Creando otro Modal
const createModal = () => {
  const allPokemon = document.querySelectorAll('.card');
  allPokemon.forEach((abrir) => {
    abrir.addEventListener('click', (event) => {
      modal.style.display = 'block';
      ordenarNum(arrayPokemon);
      const pokemonId = event.currentTarget.id - 1;
      const pokemonDetalle = document.getElementById('pokemon-detalle');
      let plantillaModal = '';
      // Variables para poder insertar los datos en el Modal
      let iconsTipo = '';
      let tipoEgg = '';
      let cantCandy = arrayPokemon[pokemonId].candyCount;
      let anteriorEvolución = '';
      let siguienteEvolución = '';

      // para obtener  el valor
      if (arrayPokemon[pokemonId].candyCount === undefined) {
        cantCandy = 0;
      }

      if (arrayPokemon.egg !== 'Not in Eggs') {
        tipoEgg = `
        <img src="img/icon-huevo.png" alt="icon-huevo">
        <p>${arrayPokemon[pokemonId].egg}</p>
        `;
      }
      // Para obtener el tipo de pokemon
      for (let i = 0; i < arrayPokemon[pokemonId].type.length; i += 1) {
        const pokemonType = arrayPokemon[pokemonId].type[i];
        iconsTipo += `
        <img class="type-icon" src="img/${pokemonType.toLowerCase()}.png" alt="${pokemonType}">
        `;
      }

      if (arrayPokemon[pokemonId].prevEvolution === undefined) {
        anteriorEvolución = 'No tiene';
      } else {
        anteriorEvolución = arrayPokemon[pokemonId].prevEvolution[0].name;
      }
      if (arrayPokemon[pokemonId].nextEvolution === undefined) {
        siguienteEvolución = 'No tiene';
      } else {
        siguienteEvolución = arrayPokemon[pokemonId].nextEvolution[0].name;
      }
      // Detalle del Modal
      plantillaModal += `
      <div class="pkmn__container">
        <div class="pkmn__picture">
            <img class="pkmn__png" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${arrayPokemon[pokemonId].num}.png"/>
            <div class="pkmn__exp-bar"></div>
        </div>
        <div class="pkmn__info">
            <div class="pkmn__name">${arrayPokemon[pokemonId].name}
              <p>${iconsTipo}</p>
            </div>
            <div class="pkmn__data">
                <div class="pkmn__weight">${arrayPokemon[pokemonId].weight}<p class="text--small">Peso</p></div>
                <div class="pkmn__type">${arrayPokemon[pokemonId].type}<p class="text--small">Tipo</p></div>
                <div class="pkmn__height">${arrayPokemon[pokemonId].height}<p class="text--small">Altura</p></div>
            </div>
            <div class="pkmn___data2">

                  <div class="pkmn__egg">${tipoEgg}<p class="text--small">Eclosión</p></div>
                  <div class="pkmn__candy">
                    <img src="img/candy.png" alt="icon-candy">
                    <p>${cantCandy}</p><p class="text--small">${arrayPokemon[pokemonId].candy}</p>
                  </div>
            </div>

            <div class="pkmn__evolucion">
              <h4>Evolución</h4>
              <div class="pkmn__anterior">${anteriorEvolución}<p class="text--small">Anterior</p></div>
              <div class="pkmn__siguiente">
              ${siguienteEvolución}<p class="text--small">Siguiente</p></div>
            </div>
        </div>
        </div>
      </div>
      `;
      // al final se inserta el contenido en pokemonDetalle
      pokemonDetalle.innerHTML = plantillaModal;
    });
  });
};
createModal();
// Funcion para cerrar modal
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === flex || e.target === modal) {
    modal.style.display = 'none';
  }
});
// Ordenar
selectOrder.addEventListener('change', () => {
  // console.log(selectOrder.value);
  if (selectOrder.value === 'A-Z') {
    containerPokemon.innerHTML = plantilla(ordenarAZ(arrayPokemon));
    createModal();
  } else if (selectOrder.value === 'Z-A') {
    containerPokemon.innerHTML = plantilla(ordenarAZ(arrayPokemon).reverse());
    createModal();
  } else {
    containerPokemon.innerHTML = plantilla(ordenarNum(arrayPokemon));
    createModal();
  }
});

// Filtrar por Tipo
selectType.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectType.value);
  const selectTipo = selectType.value;
  const resultadoFilterTipo = filterForType(arrayPokemon, selectTipo);
  containerPokemon.innerHTML = plantilla(resultadoFilterTipo);
  createModal();
});

// Filtrar por Debildiad
selectDebilidad.addEventListener('change', () => {
  // eslint-disable-next-line no-console
  console.log(selectDebilidad.value);
  const selectDeb = selectDebilidad.value;
  const resultadoFilterDebilidad = filterForWeak(arrayPokemon, selectDeb);
  containerPokemon.innerHTML = plantilla(resultadoFilterDebilidad);
  createModal();
});

// Muestra la Distancia para la evolución de cada huevo
selectDistanciaHuevos.addEventListener('change', () => {
  // console.log(selectDistanciaHuevos.value);
  const selectEgg = selectDistanciaHuevos.value;
  const resultadoFilterDistancia = filterForEgg(arrayPokemon, selectEgg);
  containerPokemon.innerHTML = plantilla(resultadoFilterDistancia);
  createModal();
});
// Muestra el top 10 de frecuencia de apariciones de pokemons
selectSpwans.addEventListener('change', () => {
  const selectTop = selectSpwans.value;
  let resultadoTop = [];
  if (selectTop === 'ascSpawnsDes') {
    resultadoTop = ordenarSpaw(arrayPokemon);
  } else {
    resultadoTop = ordenarSpaw(arrayPokemon).reverse();
  }
  containerPokemon.innerHTML = plantilla(resultadoTop.slice(0, 10));
  createModal();
});

// sección de búsqueda
inputSearch.addEventListener('keyup', () => {
  const pokemon = inputSearch.value.toLowerCase();
  const pokemonBuscado = searchPokemon(arrayPokemon, pokemon);
  containerPokemon.innerHTML = plantilla(pokemonBuscado);
  createModal();
});

// seccion para limpiar
