const counterFactory = (function () {
    let count = 0;
    return {
        value(n) {
            if (n !== undefined) {
                count = n;
            }
            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count --;
        }
    };
}) ();


console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201