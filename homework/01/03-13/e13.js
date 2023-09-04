var readlineSync = require("readline-sync");

while (isNaN(userInput)) {
  var userInput = Number(
    readlineSync.question("Give a number and I'll return the absolute value: ")
  );
}

console.log(userInput >= 0 ? userInput : userInput / -1);
