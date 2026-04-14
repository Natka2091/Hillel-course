//завдання1
//let user = new Object(); //конструктор об'єктів, або
//let user = {}; // літерал об'єкта
//дані вище взято в коментарі бо terminal не пропускає 
let user = {
    name: "Іван",
}
user.surname = "Сміт";
user.name ="Петро";
delete user.name;

//завдання2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";

alert( isEmpty(schedule) ); // false

//завдання3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

//завдання4
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

multiplyNumeric(menu);

console.log(menu);//width: 400, height: 600, title: "Моє меню"