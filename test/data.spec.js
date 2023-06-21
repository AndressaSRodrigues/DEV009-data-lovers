import { filterType, filterWeakness } from '../src/data.js';

describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  }); 

  const testData = [
    { name: 'Bulbasaur', type: ['grass', 'poison'] },
    { name: 'Ivysaur', type: ['grass', 'poison']},
    { name: 'Charmander', type: ['fire'] },
    { name: 'Squirtle', type: ['water'] },
    { name: 'Pikachu', type: ['electric'] },
  ];

  it('should return only the Pokemon with the specified type', () => {
    const filteredData = filterType(testData, 'grass');
    expect(filteredData).toEqual([{ name: 'Bulbasaur', type: ['grass', 'poison'] }, 
      { name: 'Ivysaur', type: ['grass', 'poison']}]);
  });

});

describe('filterWeakness', () => {
  
  it('is a function', () => {
    expect(typeof filterWeakness).toBe('function');
  });

  const testData = [
    { name: 'Bulbasaur', weaknesses: ['fire', 'psychic', 'flying', 'ice'] },
    { name: 'Charmander', weaknesses: ['water', 'ground', 'rock'] },
    { name: 'Squirtle', weaknesses: ['grass', 'electric'] },
    { name: 'Pikachu', weaknesses: ['ground'] },
  ];

  it('should return only the Pokemon with the specified weaknesses', () => {
    const filteredData = filterWeakness(testData, 'ground');
    expect(filteredData).toEqual([{ name: 'Charmander', weaknesses: ['water', 'ground', 'rock'] }, 
      {name: 'Pikachu', weaknesses: ['ground']}]);
  });

});