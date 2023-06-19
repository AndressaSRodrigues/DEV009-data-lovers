export const filterType = (data, pokemonType)=> {

  const eachType = data.filter(pokemon => pokemon['type'][0] === pokemonType || pokemon['type'][1] === pokemonType )
  console.log(eachType);
  return eachType;
}

export const filterResistance = (data, pokemonResistance)=> {

  const eachResistance = pokemon.resistant;

  for (let i=0; eachResistance.length < i; i++) {
    data.filter(eachResistance) === pokemonResistance;
  }
  console.log(eachResistance);
  return eachResistance;
}