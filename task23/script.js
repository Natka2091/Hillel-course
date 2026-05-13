// Додаткові тренувальні завдання
/* 1 Створи Map з такими даними:

name → Ivan
age → 20
city → Kyiv

Виведи:
ім’я
вік
місто
*/
const person = new Map ();

person.set('name', 'Ivan');
person.set('age', 20);
person.set('city', 'Kyiv');

console.log(person);
console.log(person.get('name'));
console.log(person.get('age'));
console.log(person.get('city'));

/* 2 Є:
const user = new Map();
Додай:
email
phone
Потім:
виведи весь Map
перевір, чи є ключ email
*/
const user = new Map();
user.set("email", "fjbjgbsj@.com");
user.set("phone", 4783974837);
console.log(user);
console.log(user.has("email"));

// 3 Є:
const products = new Map([
  ["apple", 50],
  ["banana", 30],
  ["orange", 40]
]);
/*
Через цикл виведи:
apple: 50
banana: 30
orange: 40
*/
for (const [key,value] of products) {
    console.log(`${key}: ${value}`)
};

products.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

/* 4 Є масив:
["cat", "dog", "cat", "bird", "dog", "cat"]

Через Map порахуй, скільки разів зустрічається кожне слово.

Очікувано:
cat → 3
dog → 2
bird → 1
*/
const animals = ["cat", "dog", "cat", "bird", "dog", "cat"];

const countAnimalse = new Map();
for (const animal of animals) {
    if (countAnimalse.has(animal)) {
        countAnimalse.set (
            animal,
            countAnimalse.get(animal) + 1
        );
    } else {
        countAnimalse.set(animal, 1) 
    }
}
for (const [animal, count] of countAnimalse) {
    console.log(`${animal}: ${count}`);
}
/* 5 Є:

[1, 2, 2, 3, 4, 4, 5]

Через Set отримай:

[1, 2, 3, 4, 5]
*/
const numbers = new Set ([1, 2, 2, 3, 4, 4, 5]);
for (const num of numbers) {
  console.log(num);
}

numbers.forEach((num) => {
  console.log(num);
});

/* 6 Є масив імен:
["Ivan", "Olga", "Ivan"]

Перевір:
чи є дублікати

Підказка:
порівняй довжину масиву і Set
*/
const names = ["Ivan", "Olga", "Ivan"];
const namesIn = new Set(names);
if (names.length !== namesIn.size) {
    console.log("Є дублікати");
} else {
    console.log("Дублікатів нема");
}

/* 7 Створи Set.

Додай:

apple
banana
apple

Виведи результат.

Треба зрозуміти:
чому apple лише один.
*/
const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple");

console.log(fruits);
// тому що Set прибирає всі дублікати

/* 8 Створи:
const privateData = new WeakMap();

І об’єкт:
const user = {};

Запиши у WeakMap:
password
token

Потім отримай їх.
*/
const privateData = new WeakMap();
const user2 = {};

privateData.set(user2, {
    password: 243424,
    token: 'jgnjkdbgkjgbjgjggjf'
});
console.log(privateData.get(user2));




/* 9 Створи кілька об’єктів користувачів.
Додай їх у WeakSet.
Перевір:
чи є користувач у колекції
*/

const user3 = {
    name: "Maia",
    age: 23
};
const user4 = {
    name: "Liam",
    age: 34
};
const user5 = {
    name: "Malia",
    age: 14
};

const allUsers = new WeakSet();
allUsers.add(user3);
allUsers.add(user4);
allUsers.add(user5);

console.log(allUsers.has(user3));
console.log(allUsers.has(user4));


/* 10 Створи:

const animal = {
  eat() {
    console.log("eating");
  }
};

Потім:

const dog = {};

Зв’яжи prototype так, щоб:

dog.eat()

працювало.
*/

/* 11 Створи:

об’єкт з prototype
однакову властивість у prototype і в самому об’єкті

Подивись:
що JS бере першим.
*/

/* 12 Створи конструктор:

function User(name, age)

Щоб можна було:

const user1 = new User("Ivan", 20);

І вивести:

user1.name
user1.age
*/

/* 13 Додай:

sayHi()

через:

User.prototype
*/

/* 14 Створи клас:

Car

з:

brand
year

І методом:

showInfo()
*/

/* 15 Створи:

BMW
Audi
Tesla

через один клас.
*/

/* 16 Створи:

клас Animal
метод eat()

Потім:

клас Dog
метод bark()

Через extends.
*/

/* 17 У Animal:

sound()

У Dog перевизнач:
щоб собака казала "Woof".
*/

/* 18 Створи:

class MathHelper

і статичний метод:

add(a, b)

Виклик:

MathHelper.add(2, 3)
*/

/* 19 Створи клас:

User

з приватним полем:

#password

І методом:

checkPassword()
*/

/* 20 Створи:

клас Student
поля:
name
age
grades

Методи:

додати оцінку
порахувати середній бал
показати інформацію

Потім:

створи кілька студентів
збережи їх у Map
у Set збережи унікальні предмети

Ця задача вже об’єднує половину тем.
*/

