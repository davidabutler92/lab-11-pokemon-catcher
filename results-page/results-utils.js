import { pokemon } from '../api.js';
import { POKEMON } from '../constants.js';
import { getFromLocalStorage } from '../helper-functions.js';

const button = document.querySelector('button');

function renderTable() {
    const table = document.querySelector('tbody');
    const pokemonResults = getFromLocalStorage('POKEMON') || [];

    for (let i = 0; i < pokemonResults.length; i++) {
        const result = pokemonResults[i];
        const tr = renderLineItems(result);

        table.append(tr);
    }
}

renderTable();

function renderLineItems(pokemon) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const captured = document.createElement('td');
    const encountered = document.createElement('td');

    captured.textContent = pokemon.captured;
    encountered.textContent = pokemon.encountered;
    tdName.textContent = pokemon.pokemon;

    tr.append(tdName, captured, encountered);

    return tr;
}

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
});

const pokemonResultsData = getFromLocalStorage('POKEMON');

const pokemonNames = pokemonResultsData.map((item) => {
    return item.pokemon;
});
const capturedData = pokemonResultsData.map((item) => {
    return item.captured;
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(66, 221, 66)',
            borderColor: 'rgb(255, 99, 132)',
            data: capturedData,
        }]
    },

    // Configuration options go here
    options: {}
});
