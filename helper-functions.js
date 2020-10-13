export function getRandomPokemon(pokemon) {
    const randomPokemon = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomPokemon];
}