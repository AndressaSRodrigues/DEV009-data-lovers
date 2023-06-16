import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Visualizar data

const pokemonData=data.pokemon;

document.body.onload=addElement;

function addElement(){

  for(const pokemon of pokemonData) {

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
