const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (arr) => {
    return Math.max.apply(null, arr);
}

console.log(myMax(list)); // 233

const person1 = {
    name: "Max",
}
const person2 = {
    name: "Vova",
}

function sayHello () {
    console.log(`Привіт, ${this.name}`)
}
const bindedSayHello = sayHello.bind(person1);
bindedSayHello();

sayHello.call(person2);


const person = {
    name: "Vitalii",
    lastName: "Ivanovich",
    get fullName () {
        return `${this.name} ${this.lastName}`
    },
    logName: function(){
        console.log(this.fullName)
    }
}
person.logName();

person.fullName()

