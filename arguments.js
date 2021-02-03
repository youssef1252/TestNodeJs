/**
 * extract the functionality wanted with value (filter or count) from the argument passed
 */
const getArguments = () => {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .map((argument) => {
            const params = argument.split('=');
            args[params[0].slice(2, params[0].length)] = (params[1] && (params[1].length > 1)) ? params[1] : true;
        });
    return args;
}

export { getArguments };