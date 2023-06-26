import data from './data/pokemon/pokemon.js';
import { filterType, filterWeakness, filterName, sortData, computedData } from './data.js';
import scrollTopButton from './scroll.js';

const pokemonData= data.pokemon;
const containerCards = document.getElementById("container-pokemon");
const spawnMessage=document.getElementById('spawn-message');

function addElement(importedData){

  containerCards.innerHTML = " ";
  spawnMessage.innerHTML= " ";

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
    containerCards.appendChild(pokemonCard); 
  }
}

addElement(pokemonData)

const filterTypes = document.getElementById('select-types');
filterTypes.addEventListener('change', () => {

  if (filterTypes.value === "all"){
    addElement(pokemonData);
    spawnMessage.innerHTML=" ";
  } else {
    addElement(filterType(pokemonData, filterTypes.value));
    const averageSpawn=computedData(filterType(pokemonData, filterTypes.value)),
      spawnMessage=document.getElementById('spawn-message');
    spawnMessage.innerHTML=`The average spawn chance for this type is ${averageSpawn}`
  }
});


const filterWeaknesses = document.getElementById('select-weakness');
filterWeaknesses.addEventListener('change', () => {

  if (filterWeaknesses.value === "all"){

    addElement(pokemonData)

  }else if (filterWeaknesses.value === "normal"){

    const noMatches= document.createTextNode("There are no matches for this type of weakness.");
    containerCards.appendChild(noMatches)

  }else{
    addElement(filterWeakness(pokemonData, filterWeaknesses.value))
  }
});

const searchFilter=document.getElementById('search');
searchFilter.addEventListener('keyup', ()=>{

  if(searchFilter === ""){
    addElement(pokemonData)
  }else{
    addElement(filterName(pokemonData, searchFilter.value))
  }
});

const sortByName = document.getElementById('sort-by-name');
sortByName.addEventListener('change', () => {

  if (sortByName.value === "all") {
    addElement(pokemonData)
  } else if (sortByName.value === "a") {
    addElement(sortData(pokemonData, "name", "AZ"));
  } else if (sortByName.value === "z") {
    addElement(sortData(pokemonData, "name", "ZA"));
  }
  
});

document.addEventListener('DOMContentLoaded', ()=>{
  scrollTopButton('.scroll-up')
})
