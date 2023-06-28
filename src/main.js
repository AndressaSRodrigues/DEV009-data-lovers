import data from './data/pokemon/pokemon.js';
import { filterType, filterWeakness, filterName, sortData, computedData } from './data.js';
import scrollTopButton from './scroll.js';
import { botonFilter } from './boton.js';
import { slideFilter } from './boton.js';

const pokemonData= data.pokemon;
const containerCards= document.getElementById("container-pokemon");
const spawnMessage= document.getElementById('spawn-message');

const modal=document.getElementById('container-modal'),
  spanContent=document.getElementsByClassName('close')[0],
  propiedades=document.querySelector('.property');

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

    
    pokemonCard.addEventListener('click', function(){
      modal.style.display='block';
      const weakArray= pokemon['weaknesses'].join( ", ");
      const resistantArray= pokemon['resistant'].join( ", ");
      const statsArray= pokemon.stats;
      const statsInfo = Object.entries(statsArray).join("<br>");
      const modalName= (namePokemon[0].toUpperCase()+namePokemon.substring(1));
      propiedades.innerHTML=`<h3>${modalName}</h3><br>
      <b>Weaknesses</b><br>${weakArray}<br><br>
      <b>Resistant<br></b>${resistantArray}<br><br>
      <b>Stats</b><br>${statsInfo}`;
      document.getElementById('modal-image').src = pokemon['img'];
      const modalContent = document.getElementById('modal-content');
      modalContent.className = '';
      modalContent.classList.add(pokemon['type'][0]);
    })
  }
}

spanContent.onclick = function() {
  modal.style.display = "none";
  containerCards.style.filter= "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
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
  scrollTopButton('.scroll-up');
  if(screen.width<=375 || screen.width<=851){
    botonFilter('.filter', '#display-filter');
    slideFilter('.filter', '#select-types', '#select-weakness');
  }
})



