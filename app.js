import { data } from './data.js';
import { filter } from './filter.js';
import { count } from './count.js';
import { getArguments } from './arguments.js';

const argumentsPassed = getArguments();

function main() {
    let result = [];
    if(argumentsPassed.filter) {
        console.log("----------filter-------------------");
        data.map((countries) => { 
            result = filter(countries, argumentsPassed.filter);
        });
    } else if(argumentsPassed.count) {
        console.log("----------count--------------------");
        data.map((countries) => { 
            result = count(countries);
        });
    }
    console.log(JSON.stringify(result));
    console.log("-----------------------------------");
}

main();