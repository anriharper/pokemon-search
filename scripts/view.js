import HUD from './components/HUD.js';
import Random from './components/Random.js';
import Search from './components/Search.js';
import Github from './components/Github.js';


const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const ShowPokemon = (props) => {
    const {dexID, pokeName, dSprite, sSprite} = props;
    renderDOM(
        `${HUD(dexID, pokeName, dSprite, sSprite)}
        ${Search()}
        ${Random()}`
    )
}

export const StartMenu = (props) => {
    renderDOM(
        `<h1 class='pokeFont center'>Pokémon Search</h1>
        <p class='center pokeFont'> Search a Pokémon by either their National Pokédex ID or their name. You will receive the Pokémon's ID, name, and an animated sprite of both its default and shiny forms. </p>
        <br>
        <p class='center pokeFont'> Due to limitations of the API's resources, only Dex ID 1-649 sprites are available (all of Generation I through V). </p>
        <br>
        ${Search()}
        ${Random()}
        <br><br><hr><br><br>
        ${Github()}`
    )
}