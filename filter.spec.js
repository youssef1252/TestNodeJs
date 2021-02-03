import { beforeEach } from '@jest/globals';
import { filter } from './filter.js';

let countries, testResultFilter;

beforeEach(() => {

  countries = {
    name: 'Dillauti',
    people:
      [{
        name: 'Winifred Graham',
        animals:
          [{name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}]
      },
        {
          name: 'Blanche Viciani',
          animals:
            [{name: 'Barbet'},
              {name: 'Rhea'},
              {name: 'Snakes'},
              {name: 'Antelope'},
              {name: 'Echidna'},
              {name: 'Crow'},
              {name: 'Guinea Fowl'},
              {name: 'Deer Mouse'}]
        },
        {
          name: 'Philip Murray',
          animals:
            [{name: 'Sand Dollar'},
              {name: 'Buzzard'},
              {name: 'Elephant'},
              {name: 'Xenops'},
              {name: 'Dormouse'},
              {name: 'Anchovy'},
              {name: 'Dinosaur'}]
        },
        {
          name: 'Bobby Ristori',
          animals:
            [{name: 'Kowari'},
              {name: 'Caecilian'},
              {name: 'Common Genet'},
              {name: 'Chipmunk'},
              {name: 'Aardwolf'},
              {name: 'Przewalski\'s Horse'},
              {name: 'Badger'},
              {name: 'Sand Cat'},
              {name: 'Linne\'s Two-toed Sloth'}]
        },
        {
          name: 'Louise Pinzauti',
          animals:
            [{name: 'Manta Ray'},
              {name: 'Nubian Ibex'},
              {name: 'Warbler'},
              {name: 'Duck'},
              {name: 'Mice'}]
        }]
  };

  testResultFilter = [
    {
      "name":"Dillauti",
      "people":[
        {
          "name":"Winifred Graham",
          "animals":[
            {
              "name":"Anoa"
            }
          ]
        }
      ]
    },
    {
      "name":"Dillauti",
      "people":[
        {
          "name":"Blanche Viciani",
          "animals":[
            {
              "name":"Antelope"
            }
          ]
        }
      ]
    },
    {
      "name":"Dillauti",
      "people":[
        {
          "name":"Philip Murray",
          "animals":[{"name":"Anchovy"}]
        }
      ]
    }
  ];

});

describe('Filter Function Test', () => {

    test('should return an object similar to variable testResultFilter', () => {
        const filterFunction = filter(countries, 'An');
        expect(filterFunction.length).toEqual(3);
        expect(filterFunction).toEqual(testResultFilter);
    });
    
});