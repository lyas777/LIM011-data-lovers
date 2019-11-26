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
  if (array.length === 0) stringTemplate = '<p class="alertNot"> Lo siento, no se encontraron Pokemons </>';
  for (let j = 0; j < array.length; j += 1) {
    template = `
      <div id="${array[j].id}" class="card">
        <figcaption class="data-text"><b>N° ${array[j].num}</b></figcaption>
        <img src="${array[j].img}"/>
        <figcaption><b>${array[j].name}</b></figcaption>
        <p class="type-icon-text">Tipo de Pokemón:</p>
    `;
    for (let i = 0; i < array[j].type.length; i += 1) {
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
                  <img class="type-icon-main" src="img/${imageFile}">`;
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
      const pokemonId = event.currentTarget.id - 1;
      const pokemonDetalle = document.getElementById('pokemon-detalle');
      let plantillaModal = '';
      // Variables para poder insertar los datos en el Modal

      const iconsTipo = '';
      let tipoEgg = '';
      let cantCandy = arrayPokemon[pokemonId].candyCount;

      if (arrayPokemon.cantCandy === undefined) {
        cantCandy = 0;
      }

      if (arrayPokemon.egg !== 'Not in Eggs') {
        tipoEgg = `
        <span class="line-vertical"></span>
        <div class="item-tripack">
          <div class='cont-tipo'>
            <img src="img/icon-huevo.png" alt="icon-huevo">
            <p class='text-tripack'>${arrayPokemon[pokemonId].egg}</p>
        </div>
      </div>`;
      }
      for (let j = 0; j < arrayPokemon[pokemonId].type; j += 1) {
        const pokemonType = arrayPokemon.type[j];
        iconsTipo += `
        <div class='cont-tipo'><img src="img/${pokemonType.toLowerCase()}.png" alt="${pokemonType}">
        <strong class='text-tripack'>${pokemonType}</strong></div>
        `;
      }
      // Detalle del Modal
      plantillaModal += `
      <div class="content-pokemones display-flex">
        <img class="img-pokemon" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${arrayPokemon[pokemonId].num}.png"/>
        <div class="contenido-poke">
          <h2 class="nombre-pokemon">${arrayPokemon[pokemonId].name}</h2>
          <div class="info-tripack display-flex">
            <div class="item-tripack ">${iconsTipo}</div>
            ${tipoEgg}
          </div>
          <div class="info-tripack display-flex">
            <div class="item-tripack">
              <p class="num-pokemon">${arrayPokemon[pokemonId].weight}</p>
              <strong class="text-tripack">Peso</strong>
            </div>
            <span class="line-vertical"></span>
            <div class="item-tripack">
              <p class="num-pokemon">${arrayPokemon[pokemonId].avg_spawns}</p>
              <strong class="text-tripack">% Spawns</strong>
            </div>
            <span class="line-vertical"></span>
            <div class="item-tripack">
              <p class="num-pokemon">${arrayPokemon[pokemonId].height}</p>
              <strong class="text-tripack">Altura</strong>
            </div>
          </div>
          <table class="more-info">
            <tr>
              <th>Hora de Spawn:</th>
              <td>${arrayPokemon[pokemonId].spawnTime}</td>
            </tr>
            <tr>
              <th>Debilidad:</th>
              <td>${arrayPokemon[pokemonId].weaknesses.toString().replace(/,/g, ', ')}</td>
            </tr>
            <tr>
              <th>Caramelo:</th>
              <td>${arrayPokemon[pokemonId].candy}</td>
            </tr>
            <tr>
              <th>Cant. Caramelo:</th>
              <td>${cantCandy}</td>
            </tr>
          </table>
        </div>
      <button id="" class="btn btn-more"></button>
    </div>

      `;

      // al final se inserta el contenido en pokemonDetalle
      pokemonDetalle.innerHTML = plantillaModal;
    });
  });
};
createModal();

/*
// Sección de la función para crear el Modal

const creaModal = (array) => {
  const divItems = containerPokemon.getElementsByTagName('div');
  // console.log(divItems);
  // En esta sección se obtiene los id's de cada tarjeta
  for (let i = 0; i < divItems.length; i += 1) {
    const divItem = document.getElementById(divItems[i].getAttribute('id'));
    // clic en cada tarjeta
    divItem.addEventListener('click', () => {
      modal.style.display = 'block';
      const pokemonDetalle = document.getElementById('pokemon-detalle');
      let plantillaModal = '';
      // Detalle de Modal
      plantillaModal = `
        <div class="img-container">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${array[i].num}.png"/>
        </div>
        <div class="pokemon-text center-text">
          <h1>${array[i].name}</h1>
          <span class="pokemon-text-two data-text">N.º ${array[i].num}</span>
        </div>
        <div class="detail-container">
          <div class="center-text center-text-two">
            <p class="data-number">${array[i].weight}</p>
            <p class="data-text">Peso</p>
        </div>
        <div class="center-text center-text-two">`;
      // extraer las imagenes de iconos
      for (let x = 0; x < array[i].type.length; x += 1) {
        let imageFile = '';
        switch (array[i].type[i]) {
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
        plantillaModal += `
          <img class="type-icon" src="img/${imageFile}">
          <p class="data-text"> ${array[i].type[i]} </p>`;
      }
      plantillaModal += `</div>
        <div class="center-text center-text-two">
          <p class="data-number">${array[i].height}</p>
          <p class="data-text">Altura</p>
        </div>
      </div>`;
      if (array[i].candy_count !== undefined) {
        plantillaModal += `
        <div class="detail-container2 center-text pokemon-text">
          <div>
            <img class="caramel-icon" src="img/candy.png">
            <p class="pokemon-text-second data-number">${array[i].candy_count}</p>
            <p class="pokemon-text-third data-text">Caramelos</p>
          </div>
        `;
      }
      plantillaModal += `
        <div>
        <p class="pokemon-text-second data-number">${array[i].egg}</p>
        <p class="pokemon-text-third data-text">Huevos</p>
        </div>
      </div>`;

      if (array[i].next_evolution !== undefined) {
        plantillaModal += `
        <div class="detail-container3 center-text pokemon-text">
      <p class="pokemon-text-four data-text"><strong>Evolución:</strong> ${array[i].next_evolution[0].name}</p></div>
      `;
      }
      plantillaModal += `</div>
        <div class="detail-container3 center-text pokemon-text">
          <p class="pokemon-text-four data-text"><strong>Debilidades:</strong> ${array[i].weaknesses}</p>
        </div>
      </div>`;
      pokemonDetalle.innerHTML = plantillaModal;
    });
  }
};

creaModal(pokemonData);
*/

// Funcion para cerrar modal

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === flex) {
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
