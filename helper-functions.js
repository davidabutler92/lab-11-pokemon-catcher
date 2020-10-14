import { pokemon } from './api.js';
import { POKEMON } from './constants.js';

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

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
}