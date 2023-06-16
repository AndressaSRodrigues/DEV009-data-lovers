import data from './data/pokemon/pokemon.js';

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

    if(pokemon['type']['0'] === "grass"){
      pokemonCard.classList.add("grass")
    } else if(pokemon['type']['0'] === "fire"){
      pokemonCard.classList.add("fire")
    } else if(pokemon['type']['0'] === "electric"){
      pokemonCard.classList.add("electric")
    } else if(pokemon['type']['0'] === "dragon"){
      pokemonCard.classList.add("dragon")
    } else if(pokemon['type']['0'] === "poison"){
      pokemonCard.classList.add("poison")
    } else if(pokemon['type']['0'] === "water"){
      pokemonCard.classList.add("water")
    } else if(pokemon['type']['0'] === "ground"){
      pokemonCard.classList.add("ground")
    } else if(pokemon['type']['0'] === "bug"){
      pokemonCard.classList.add("bug")
    } else if(pokemon['type']['0'] === "fairy"){
      pokemonCard.classList.add("fairy")
    } else if(pokemon['type']['0'] === "psychic"){
      pokemonCard.classList.add("psychic")
    } else if(pokemon['type']['0'] === "ghost"){
      pokemonCard.classList.add("ghost")
    }else if(pokemon['type']['0'] === "normal"){
      pokemonCard.classList.add("normal")
    }else if(pokemon['type']['0'] === "steel"){
      pokemonCard.classList.add("steel")
    }else if(pokemon['type']['0'] === "dark"){
      pokemonCard.classList.add("dark")
    }else if(pokemon['type']['0'] === "fighting"){
      pokemonCard.classList.add("fighting")
    }else if(pokemon['type']['0'] === "flying"){
      pokemonCard.classList.add("flying")
    }else if(pokemon['type']['0'] === "ice"){
      pokemonCard.classList.add("ice")
    }else if(pokemon['type']['0'] === "rock"){
      pokemonCard.classList.add("rock")
    }
    
    pokemonCard.appendChild(cardNameStyle);
    pokemonCard.appendChild(cardImage);
    pokemonCard.appendChild(cardTypeStyle);
    cardNameStyle.appendChild(cardName);
    cardTypeStyle.appendChild(cardType);
    document.getElementById("container-pokemon").appendChild(pokemonCard); 
  }
}
