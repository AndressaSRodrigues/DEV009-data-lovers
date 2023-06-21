export const filterType = (data, pokemonType)=> {

  const eachType = data.filter(pokemon => pokemon['type'].includes(pokemonType));
  return eachType;
};

export const filterWeakness = (data, pokemonWeakness) => {
  const eachWeakness = data.filter(pokemon => pokemon['weaknesses'].includes(pokemonWeakness));

  return eachWeakness;
};

export const filterName = (data, pokemonName) => {
  const eachName = data.filter(pokemon => pokemon['name'].includes(pokemonName.toLowerCase()));
  
  return eachName;
};