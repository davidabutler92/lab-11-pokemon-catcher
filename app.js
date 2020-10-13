// import functions and grab DOM elements
import { pokemon } from './api.js';
import { getRandomPokemon, findByName } from './helper-functions.js';

const pokeImageTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');


const pokeCart = [];
let pokeballs = 10;

for (let i = 0; i < pokeRadioTags.length; i++) {
    pokeRadioTags[i].addEventListener('click', (e) => {
        if (pokeballs === 0) {
            alert('You are out of pokeballs!');
        } else {
            pokeballs--;
        }

        for (let i = 0; i < pokeRadioTags.length; i++) {
            const radio = pokeRadioTags[i];
            let item = findByName(pokeCart, radio.value);
            if (!item) {
                item = {
                    pokemon: pokeRadioTags[i].value,
                    encountered: 1,
                    captured: 0,
                };
                pokeCart.push(item);
            } else {
                item.encountered++;
            }
        }
        const capturedPokemon = findByName(pokeCart, e.target.value);
        capturedPokemon.captured++;
        console.log(pokeCart);
        renderPokemon();
    });
}

export function renderPokemon() {
    let pokemonOne = getRandomPokemon(pokemon);
    let pokemonTwo = getRandomPokemon(pokemon);
    let pokemonThree = getRandomPokemon(pokemon);  
    while (pokemonOne.id === pokemonTwo.id || pokemonTwo.id === pokemonThree.id || pokemonThree.id === pokemonOne.id) {
        pokemonOne = getRandomPokemon(pokemon);
        pokemonTwo = getRandomPokemon(pokemon);
        pokemonThree = getRandomPokemon(pokemon);
    }  
    pokeRadioTags[0].value = pokemonOne.pokemon;
    pokeImageTags[0].src = pokemonOne.url_image;
    pokeRadioTags[1].value = pokemonTwo.pokemon;
    pokeImageTags[1].src = pokemonTwo.url_image;
    pokeRadioTags[2].value = pokemonThree.pokemon;
    pokeImageTags[2].src = pokemonThree.url_image;
}

renderPokemon();