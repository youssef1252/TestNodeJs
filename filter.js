const resultFilter = [];
/**
 * @param {*} name
 * @param {*} args
 */
const searchString = (name, args) => {
    const regex = RegExp(args, "g");
    return regex.test(name);
  };
  
  /**
   *
   * @param {*} args
   * @param {*} pays
   */
  export const filter = (countries, args) => {
    return countries.people.reduce((accumulator, currentPeople) => {
        const animal = currentPeople.animals.filter((animal) =>
            searchString(animal.name, args)
        );
        if (animal.length) {
            resultFilter.push({
                name: countries.name,
                people: [
                    {
                        name: currentPeople.name,
                        animals: animal
                    }
                ]
            })
        }
        return resultFilter;
    }, []);
  };
  