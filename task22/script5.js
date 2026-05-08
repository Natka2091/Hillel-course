const myMul = (a, b) => a * b;

/* або 
const myMul = (a, b) => {
    return a * b;
}
*/
const myDouble = (n) => {
    const double = myMul.bind(null, 2);
    return double(n);
};

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

const myTriple = (n) => {
    const triple = myMul.bind(null, 3);
    return triple(n);
}

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15