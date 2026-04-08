// завдання 3
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// завдання 4
function pow(x, n) {
    if (!Number.isInteger(n) || n < 1) {
    throw new Error("Степінь n має бути натуральним числом");
  }
  return (x ** n);
}
const x = +prompt("base: ", "");
const n = +prompt("exponent: ", "");
const result = pow(x, n);
alert ("результат: " + result);
