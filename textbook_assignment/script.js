// завдання 1.4
let table = document.getElementById('age-table');
document.querySelectorAll('#age-table label');
table.querySelector('td');
document.querySelector('form[name="search"]');
form.querySelector('input')

let inputs = form.querySelectorAll('input') 
inputs[inputs.length-1] // піддивилася


// підручник 5.5
// завдання перше
// тут починала робити сама поки не дійшла до регістра
function camelize(str) {
    const words = str.split("-", 3);
    return words;
}
const result = camelize("my-short-string");

console.log(result);  //["my", "short", "string"]
console.log(result.join(""));//"myshortstring"

//а це вже піддивилася
function camelize(str) {
  return str
    .split('-') //["my", "short", "string"]
    .map((word, index) => {
      // Якщо це перше слово (index 0) — лишаємо його як є.
      // Якщо це наступні слова — робимо першу літеру великою.
      if (index === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(''); // склеюємо
}

console.log(camelize("my-short-string")); // "myShortString"

//завдання 2 (!уточнити за індекси)
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 

alert( arr ); // 5,3,8,1 

/*
закоментовано бо видає помилку
завдання 4
let arr = [5, 2, 1, -10, 8];
arr.sort( (a, b) => b - a );
alert( arr ); // 8, 5, 2, 1, -10
*/