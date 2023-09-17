const fs = require("fs");
const readlineSync = require("readline-sync");

let fileName = readlineSync.question("Give file name: ");
readJson(fileName);

function readJson(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log("data does not exist");
    } else {
      try {
        const obj = JSON.parse(data);
        let containsName = "name" in obj;
        if (containsName) {
          console.log(obj.name);
        } else {
          console.log(`file ${file} contains json but not property name`);
        }
      } catch (err) {
        console.log(`file ${file} does not contain json`);
      }
    }
  });
}
