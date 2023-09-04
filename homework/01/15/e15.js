var readlineSync = require("readline-sync");
let args = process.argv;
let userLotto = args.slice(2);
let lottoNumberAmount = 7;
let lottoMin = 1;
let lottoMax = 40;
var showAllLottos = false;

// Validates user input
function validateLotto() {
  while (!correctNumbers(userLotto)) {
    let userInput = readlineSync.question(
      `Give ${lottoNumberAmount} lotto numbers [${lottoMin}-${lottoMax}]: `
    );
    let userNumbers;
    if (userInput.includes(",")) {
      userNumbers = userInput.trim().split(",");
    } else {
      userNumbers = userInput.split(" ");
    }

    userLotto = []; // empty array
    for (let i = 0; i < userNumbers.length; i++) {
      userLotto.push(parseInt(userNumbers[i]));
    }
  }
}

// Asks if the user wants to see all rows or just the winning times
function askPreferences() {
  let optionsString =
    "[1] Show all lottos\n[2] Only show the time it took to win\n";
  while (isNaN(choice) || choice > 2 || choice < 1) {
    var choice = Number(readlineSync.question(optionsString));
  }
  if (choice == 1) {
    showAllLottos = true;
  }
}

// Plays lotto until new highscore
function lottoUntilHighScore(highScore) {
  let weeks = 0;
  let lotto = uniqueNumbers(lottoNumberAmount, lottoMin, lottoMax);

  if (showAllLottos) {
    displayArray("Your numbers:", userLotto);
    displayArray("Lotto: ", lotto);
  }
  while (compareArrays(userLotto, lotto) < highScore) {
    weeks++;
    lotto = uniqueNumbers(lottoNumberAmount, lottoMin, lottoMax);

    if (showAllLottos) {
      displayArray("Your numbers:", userLotto);
      displayArray("Lotto: ", lotto);
    }
  }
  displayArray("Your numbers:", userLotto);
  displayArray("Lotto: ", lotto);

  if (weeks > 52) {
    console.log(
      `${highScore} took ${Math.round((weeks / 52) * 100) / 100} years`
    );
  } else {
    console.log(`${highScore} took ${weeks} weeks`);
  }
}

// Returns {amount} of unique numbers between {min} and {max} (inclusive)
function uniqueNumbers(amount, min, max) {
  let arr = [];
  while (arr.length < amount) {
    let randomNumber = randomInt(min, max);
    while (arr.includes(randomNumber)) {
      randomNumber = randomInt(min, max);
    }
    arr.push(randomNumber);
  }
  return arr;
}

// Prints array to the console
function displayArray(desc, arr) {
  console.log(`${desc} [${arr.join(", ")}]`);
}

// Compares two arrays and returns the amount of same numbers in them
function compareArrays(arr1, arr2) {
  let hits = 0;
  for (item of arr1) {
    if (arr2.includes(Number(item))) {
      hits++;
    }
  }
  if (showAllLottos) {
    console.log(`Correct: ${hits}`);
  }
  return hits;
}

// Returns a random int between {min} and {max} (inclusive)
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// All number validations in the same function
function correctNumbers(numberArr) {
  let correctLength = numberArr.length == lottoNumberAmount;
  let correctFormat = !numberArr.some(isNaN);
  return (
    correctLength &&
    correctFormat &&
    correctRange(numberArr, lottoMin, lottoMax) &&
    !hasDuplicates(numberArr)
  );
}

function correctRange(arr, min, max) {
  return !arr.some((i) => i < min) && !arr.some((i) => i > max);
}

function hasDuplicates(arr) {
  return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
}

function main() {
  validateLotto();
  askPreferences();
  let highScore = 1;
  while (highScore <= 7) {
    lottoUntilHighScore(highScore);
    highScore++;
  }
}

main();
