// завдання 2
function checkAge(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

// завдання 3
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}