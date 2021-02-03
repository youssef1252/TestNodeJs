const resultCount = [];
/**
 * @param {*} pays
 */
export const count = (countries) => {
    const countPeople = countries.people.length;
    let objectCounter = {
        name: `${countries.name}[${countPeople}]`,
        people: []
    };
    countries.people.map(p => {
        const countAnimale = p.animals.length;
        objectCounter['people'].push({
            name: `${p.name}[${countAnimale}]`,
            animals: p.animals
        });
    });
    
    resultCount.push(objectCounter);
    return resultCount;
  };
  