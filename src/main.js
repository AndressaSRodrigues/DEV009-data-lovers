import data from './data/pokemon/pokemon.js';
import { filterType, filterWeakness } from './data.js';

const pokemonData= data.pokemon;

function addElement(importedData){

  for(const pokemon of importedData) {

    const pokemonCard=document.createElement('div'),
      namePokemon=pokemon['name'],
      cardName=document.createTextNode(namePokemon[0].toUpperCase()+namePokemon.substring(1)),
      cardTypeArray=pokemon['type'].join( ", "),
      cardType=document.createTextNode(cardTypeArray[0].toUpperCase()+cardTypeArray.substring(1)),
      cardNameStyle=document.createElement('span'),
      cardTypeStyle=document.createElement('span'),
      cardImage=document.createElement('img')

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

  (filterTypes.value === "all")
    ? addElement(pokemonData)
    : addElement(filterType(pokemonData, filterTypes.value));
});


const filterWeaknesses = document.getElementById('select-weakness');
filterWeaknesses.addEventListener('change', () => {

  const containerCards = document.getElementById("container-pokemon");
  containerCards.innerHTML = " ";

  if (filterWeaknesses.value === "all"){

    addElement(pokemonData)

  }else if (filterWeaknesses.value === "normal"){

    const noMatches= document.createTextNode("There are no matches for this type of weaknesses.");
    document.getElementById("container-pokemon").appendChild(noMatches)

  }else{
    addElement(filterWeakness(pokemonData, filterWeaknesses.value))
  }
});