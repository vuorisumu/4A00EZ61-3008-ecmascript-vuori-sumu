var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("You said your name is: " + userName);

while (isNaN(repeatTimes)) {
  var repeatTimes = Number(readlineSync.question("Give me a number: "));
}
console.log(userName.repeat(repeatTimes));
