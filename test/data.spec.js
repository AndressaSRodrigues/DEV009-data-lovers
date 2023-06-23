import { filterType, filterWeakness, filterName, sortData, computedData } from '../src/data.js';

const testData = [
  { name: 'bulbasaur', type: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice'], "spawn-chance": "0.69"},
  { name: 'ivysaur', type: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice'], "spawn-chance": "0.042"},
  { name: 'charmander', type: ['fire'], weaknesses: ['water', 'ground', 'rock'], "spawn-chance": "0.253"},
  { name: 'squirtle', type: ['water'], weaknesses: ['grass', 'electric'], "spawn-chance": "0.58"},
  { name: 'pikachu', type: ['electric'], weaknesses: ['ground'], "spawn-chance": "0.21"},
];

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  }); 
  it('should return only the Pokemon with the specified type', () => {
    const filteredData = filterType(testData, 'grass');
    expect(filteredData[0,1].type).toContain('grass');
  });

});

describe('filterWeakness', () => {
  it('is a function', () => {
    expect(typeof filterWeakness).toBe('function');
  });

  it('should return only the Pokemon with the specified weaknesses', () => {
    const filteredData = filterWeakness(testData, 'ground');
    expect(filteredData[0,1].weaknesses).toContain('ground');
  });
});

describe('filterName', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('should display the pokemon according to the search', () => {
    const filterSearch = filterName(testData, 'pik');
    expect(filterSearch[0].name).toContain('pikachu');
  });

  it('should display the pokemon according to the search', () => {
    const filterSearch = filterName(testData, 'c');
    expect(filterSearch[0].name).toContain('charmander');
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should return the pokemon sorted from A to Z', () => {
    const sortedData = sortData(testData, 'name', 'AZ');
    expect(sortedData[0].name).toEqual('bulbasaur');
    expect(sortedData[1].name).toEqual('charmander');
    expect(sortedData[2].name).toEqual('ivysaur');
  });

  it('should return the pokemon sorted from Z to A', () => {
    const sortedData = sortData(testData, 'name', 'ZA');
    expect(sortedData[0].name).toEqual('squirtle');
    expect(sortedData[1].name).toEqual('pikachu');
    expect(sortedData[2].name).toEqual('ivysaur');
  });
});

describe('computedData', () => {
  it('is a function', () => {
    expect(typeof computedData).toBe('function');
  });

  const testNull = [{ name: 'chikorita', type: ['grass'], "spawn-chance": null}];
  it('should return 0 if the spawn chance is null', () => {
    const eachSpawnValue = computedData(testNull);
    expect(eachSpawnValue).toEqual('0.00');
  });

  it('should calculate the average spawn chance of all pokemon', () => {
    const eachSpawnValue = computedData(testData);
    expect(eachSpawnValue).toEqual('0.35');
  });
});