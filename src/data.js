export const filterData = (data, pokemonType)=> {

  const eachType = data.filter(pokemon => pokemon['type'][0] === pokemonType || pokemon['type'][1] === pokemonType )
  console.log(eachType);
  return eachType;
}