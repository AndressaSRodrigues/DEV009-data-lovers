import data from './data/pokemon/pokemon.js';

//Visualizar data

const pokemonData=data.pokemon;

//document.body.onload=addElement;

document.addEventListener('load', addElement(pokemonData))

function addElement(importedData){

  for(const pokemon of importedData) {

    const pokemonCard=document.createElement('div'),
      cardContent=document.createTextNode(pokemon['num']),
      cardImage=document.createElement('img');
    cardImage.setAttribute("src", pokemon['img']);
    cardImage.classList.add("images")
    pokemonCard.classList.add("box");
    
    pokemonCard.appendChild(cardContent);
    document.getElementById("container-pokemon").appendChild(pokemonCard); 
    pokemonCard.appendChild(cardImage)
  }
}
