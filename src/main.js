import data from './data/pokemon/pokemon.js';
import { filterTypes } from './data.js';

//Visualizar data

const pokemonData=data.pokemon;

document.addEventListener('load', addElement(pokemonData))

function addElement(importedData){

  for(const pokemon of importedData) {

    const pokemonCard=document.createElement('div'),
      cardName=document.createTextNode(pokemon['name']),
      cardType=document.createTextNode(pokemon['type']),
      cardNameStyle=document.createElement('span'),
      cardTypeStyle=document.createElement('span'),
      cardImage=document.createElement('img');
    cardImage.setAttribute("src", pokemon['img']);
    cardImage.classList.add("images");
    pokemonCard.classList.add("box");
    cardNameStyle.classList.add("name-style");
    cardTypeStyle.classList.add("type-style");

    //Cards Style
    
    pokemonCard.classList.add(
      pokemon['type'][0] === "bug" ? "bug" :
      pokemon['type'][0] === "dark" ? "dark" :
      pokemon['type'][0] === "dragon" ? "dragon" :
      pokemon['type'][0] === "electric" ? "electric" :
      pokemon['type'][0] === "fairy" ? "fairy" :
      pokemon['type'][0] === "fighting" ? "fighting" :
      pokemon['type'][0] === "fire" ? "fire" :
      pokemon['type'][0] === "flying" ? "flying" :
      pokemon['type'][0] === "ghost" ? "ghost" :
      pokemon['type'][0] === "grass" ? "grass" :
      pokemon['type'][0] === "ground" ? "ground" :
      pokemon['type'][0] === "ice" ? "ice" :
      pokemon['type'][0] === "normal" ? "normal" :
      pokemon['type'][0] === "poison" ? "poison" :
      pokemon['type'][0] === "psychic" ? "psychic" :
      pokemon['type'][0] === "rock" ? "rock" :
      pokemon['type'][0] === "steel" ? "steel" :
      pokemon['type'][0] === "water" ? "water" :
      ''
    );

    pokemonCard.appendChild(cardNameStyle);
    pokemonCard.appendChild(cardImage);
    pokemonCard.appendChild(cardTypeStyle);
    cardNameStyle.appendChild(cardName);
    cardTypeStyle.appendChild(cardType);
    document.getElementById("container-pokemon").appendChild(pokemonCard); 
  }
};


/*
const checkboxes = document.querySelectorAll('.poke-type');
const selectedboxes = checkboxes.checked; 
*/