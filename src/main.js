import data from './data/pokemon/pokemon.js';
import { filterType, filterWeakness } from './data.js';

const pokemonData= data.pokemon;

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
}

addElement(pokemonData)

const filterTypes = document.getElementById('select-types');
filterTypes.addEventListener('change', () => {

  const containerCards = document.getElementById("container-pokemon");
  containerCards.innerHTML = " ";

  if (filterTypes.value === "all") {
    addElement(pokemonData);
  } else {
    addElement(filterType(pokemonData, filterTypes.value));
  }
});

const filterWeaknesses = document.getElementById('select-weakness');
filterWeaknesses.addEventListener('change', () => {

  const containerCards = document.getElementById("container-pokemon");
  containerCards.innerHTML = " ";

  if (filterWeaknesses.value === "all") {
    addElement(pokemonData);
  } else {
    addElement(filterWeakness(pokemonData, filterWeaknesses.value));
  }
});