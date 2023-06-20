export const filterType = (data, pokemonType)=> {

  const eachType = data.filter(pokemon => pokemon['type'].includes(pokemonType));
  return eachType;
};

export const filterWeakness = (data, pokemonWeakness) => {
  const eachWeakness = data.filter(pokemon => pokemon['weaknesses'].includes(pokemonWeakness));

  return eachWeakness;
};