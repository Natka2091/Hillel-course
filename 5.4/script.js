//завдання1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4

//завдання2
let styles = ["Jazz", "Blues"];//Jazz, Blues
styles.push("Rock-n-Roll");//Jazz, Blues, Rock-n-Roll
styles[Math.floor((styles.length - 1) / 2)] = "Classics";// Jazz, Classics, Rock-n-Roll цей рядок я піддивилася у відповідях
alert( styles.shift() );//Classics, Rock-n-Roll
styles.unshift("Rap", "Reggae");//Rap, Reggae, Classics, Rock-n-Roll

