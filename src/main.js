import data from './data/pokemon/pokemon.js';

//Visualizar data

const pokemonData=data.pokemon;

//document.body.onload=addElement;

document.addEventListener('load', addElement(pokemonData))

function addElement(importedData){

  for(const pokemon of importedData) {

    const pokemonCard=document.createElement('div'),
      cardName=document.createTextNode(pokemon['name']),
      cardType=document.createTextNode(pokemon['type']),
      cardImage=document.createElement('img');
    cardImage.setAttribute("src", pokemon['img']);
    cardImage.classList.add("images");
    pokemonCard.classList.add("box");
    
    pokemonCard.appendChild(cardName);
    pokemonCard.appendChild(cardType);
    pokemonCard.appendChild(cardImage);
    document.getElementById("container-pokemon").appendChild(pokemonCard); 
  }
}
