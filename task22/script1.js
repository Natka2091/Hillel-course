const counter = (function() {
    let count = 0;
    return function(n) {
        if (n !== undefined) {
            count = n;
        }
        return count++;
    };
})();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); //  100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log(counter(0)); // 0
console.log(counter()); // 0
console.log(counter()); // 1
