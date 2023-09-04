const asciitable = require("asciitable");
const readlineSync = require("readline-sync");
let database = [];
let idNumber = 0;
var optionsString = `[1] Add
[2] Remove
[3] Display
[0] CANCEL

Choice? [1, 2, 3, 0]: `;

// ADD
function add() {
  while (studentName == null) {
    var studentName = readlineSync.question("May I have student name?\n");
  }
  database.push({ id: idNumber, name: studentName });
  idNumber++;
  main();
}

// REMOVE
function remove() {
  if (database.length == 0) {
    main();
  }
  while (isNaN(choice) || choice > database.length || choice < 0) {
    var choice = Number(readlineSync.question("May I have ID?\n"));
  }

  for (var i in database) {
    if (database[i].id == choice) {
      database.splice(i, 1);
      break;
    }
  }
  main();
}

// DISPLAY
function display() {
  let options = {
    columns: [
      { field: "id", name: "Student ID" },
      { field: "name", name: "Name" },
    ],
  };
  let students = asciitable(options, database);
  console.log(students);
  main();
}

// MAIN
function main() {
  while (isNaN(choice) || choice > 3 || choice < 0) {
    var choice = Number(readlineSync.question(optionsString));
  }
  if (choice == 1) add();
  else if (choice == 2) remove();
  else if (choice == 3) display();
}

main();
