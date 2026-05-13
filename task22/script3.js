function createPrefixer(prefix) {
    return function(name) {
        return `${prefix} ${name}`
    };
}

const mrPrefixer = createPrefixer('Mr.');

const a = mrPrefixer('John');
console.log(a);
console.log(mrPrefixer('Petia'));
