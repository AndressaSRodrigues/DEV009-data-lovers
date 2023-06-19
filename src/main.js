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

      pokemonCard.classList.add(pokemon['type'][0]);

      pokemonCard.appendChild(cardNameStyle);
      pokemonCard.appendChild(cardImage);
      pokemonCard.appendChild(cardTypeStyle);
      cardNameStyle.appendChild(cardName);
      cardTypeStyle.appendChild(cardType);
      document.getElementById("container-pokemon").appendChild(pokemonCard); 
    }
};

//Checkboxes for types
const checkboxes = document.querySelectorAll('.poke-type');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    alert('Checkbox selected!')
});
});
