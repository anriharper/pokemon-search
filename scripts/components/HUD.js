import Sprite from './Sprite.js';

const HUD = (dexID, pokeName, dSprite, sSprite) => (
    `<h1 class='pokeFont center'>Pokémon Search</h1>
    <h2 class='otherFont center'>
        <div id='num'> National Dex ID: ${dexID} </div>
        <div id='name'> Pokémon Name: ${pokeName} </div>
    </h2>
    <br>
    ${Sprite(dSprite, sSprite)}`
)

export default HUD;