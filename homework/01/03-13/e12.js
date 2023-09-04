var readlineSync = require("readline-sync");

var userInput = readlineSync
  .question("Write something and I'll check if it's a palindrome: ")
  .trim();
var isPalindrome = true;
for (let i = 0; i < userInput.length / 2; i++) {
  if (userInput[i] != userInput[userInput.length - i - 1]) {
    isPalindrome = false;
  }
}

console.log(isPalindrome ? "Yes it is" : "No it is not");
