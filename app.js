// import functions and grab DOM elements
import { pokemon } from './api.js';
import { getRandomPokemon } from './helper-functions.js';
console.log(pokemon);

const pokeImageTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');
const button = document.querySelector('button');

// initialize state
button.addEventListener('click', () => {
    renderPokemon();
});

function renderPokemon() {
    let pokemonOne = getRandomPokemon(pokemon);
    let pokemonTwo = getRandomPokemon(pokemon);
    let pokemonThree = getRandomPokemon(pokemon);
    console.log(pokemonOne);
    
    while (pokemonOne.id === pokemonTwo.id || pokemonTwo.id === pokemonThree.id || pokemonThree.id === pokemonOne.id) {
        pokemonOne = getRandomPokemon(pokemon);
        pokemonTwo = getRandomPokemon(pokemon);
        pokemonThree = getRandomPokemon(pokemon);
    }  
    pokeRadioTags[0].value = pokemonOne.id;
    pokeImageTags[0].src = pokemonOne.url_image;
    pokeRadioTags[1].value = pokemonTwo.id;
    pokeImageTags[1].src = pokemonTwo.url_image;
    pokeRadioTags[2].value = pokemonThree.id;
    pokeImageTags[2].src = pokemonThree.url_image;
}

renderPokemon();



