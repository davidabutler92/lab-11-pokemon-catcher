import { pokemon } from './api.js';

export function getRandomPokemon(pokemon) {
    const randomPokemon = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomPokemon];
}

export function findByName(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.pokemon === someId) {
            return item;
        }
    }
}