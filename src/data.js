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

export const sortData=(data, sortBy, sortOrder)=>{
  const sortedData=[...data]
  if(sortOrder==="AZ"){
    sortedData.sort((a,b)=> a[sortBy].localeCompare(b[sortBy]));
  } else {
    sortedData.sort((a,b)=> b[sortBy].localeCompare(a[sortBy]));
  }
  return sortedData;
};

export const computedData= (data) => {
  const spawnChance = data.map(pokemon => pokemon['spawn-chance']),
    eachSpawnValue = (Object.values(spawnChance));

  let totalSum=0;

  for(let i=0; i<eachSpawnValue.length; i++){
    if(eachSpawnValue[i]!== null){
      totalSum+=parseFloat(eachSpawnValue[i]);
    }
  }
  const averageSpawn=(totalSum/spawnChance.length).toFixed(2);
  return averageSpawn;
};