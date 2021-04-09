import * as http from './http.js'
import * as view from './view.js';
// var input = generateRandomID(1, 898);
// var GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/${input}/`;
var searchInput = document.getElementById("search");

// window.start = async () => {
//     const json = await http.sendGETRequest(GET_POKEMON);   
//     pokemon.dexID = json.id; 
//     pokemon.pokeName = json.species.name;
//     findSprites(pokemon.dexID);
//     view.ShowPokemon(pokemon);
// }

window.start = async() => {
    view.StartMenu();
}

window.getRandomPokemon = async() => {
    const json = await http.sendGETRequest(generateRandomPoke());   
    pokemon.dexID = json.id; 
    const capitalName = json.species.name.charAt(0).toUpperCase() + json.species.name.slice(1);
    pokemon.pokeName = capitalName;
    findSprites(pokemon.dexID);
    view.ShowPokemon(pokemon);
}

window.getSearchPokemon = async(input) => {
    const json = await http.sendGETRequest(searchPokemon(input.value));
    pokemon.dexID = json.id;
    const capitalName = json.species.name.charAt(0).toUpperCase() + json.species.name.slice(1);
    pokemon.pokeName = capitalName;
    findSprites(pokemon.dexID);
    view.ShowPokemon(pokemon);
}


window.addEventListener('load', start);

function generateRandomID (minVal, maxVal) {
    var random = minVal + (Math.random() * (maxVal-minVal));
    return Math.round(random);
}

function generateRandomPoke () {
    const id = generateRandomID(1, 898);
    const GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return GET_POKEMON;
}

function searchPokemon (input) {
    input = input.charAt(0).toLowerCase() + input.slice(1);
    const GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    return GET_POKEMON;
}

const pokemon = {
    dexID: 0,
    pokeName: "",
    dSprite: "",
    sSprite: ""
};

function findSprites(dexID) {
    if (dexID < 650) {
        pokemon.dSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${dexID}.gif`
        pokemon.sSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${dexID}.gif`    
    }
    else {
        pokemon.dSprite = '';
        pokemon.sSprite = '';
    }
}

window.randomPokemon = async() => {
    input = generateRandomID(1, 898);
    const json = await http.sendGETRequest(GET_POKEMON);   
    pokemon.dexID = json.id; 
    pokemon.pokeName = json.species.name;
    findSprites(pokemon.dexID);
    view.ShowPokemon(pokemon);
}
