const readlineSync = require("readline-sync");
const abs = (a) => (a < 0 ? -a : a);

while (isNaN(userInput)) {
  var userInput = Number(
    readlineSync.question("Give a number and I'll return the absolute value: ")
  );
}

console.log(abs(userInput));

/*
function abs(a) {
  return a < 0 ? -a : a;
} */
