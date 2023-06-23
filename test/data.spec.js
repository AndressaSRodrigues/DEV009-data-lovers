import { filterType, filterWeakness } from '../src/data.js';

const testData = [
  { name: 'bulbasaur', type: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice']},
  { name: 'ivysaur', type: ['grass', 'poison'], weaknesses: ['fire', 'psychic', 'flying', 'ice']},
  { name: 'charmander', type: ['fire'], weaknesses: ['water', 'ground', 'rock']},
  { name: 'squirtle', type: ['water'], weaknesses: ['grass', 'electric']},
  { name: 'pikachu', type: ['electric'], weaknesses: ['ground']},
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
/*
describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should return the pokemon sorted from A to Z', () => {
    const sortedData = sortData(testData, 'name', 'AZ');
    expect(sortedData).toEqual(['bulbasaur', 'charmander', 'ivysaur', 'pikachu', 'squirtle']);
  });
});*/