const fs = require("fs");
const readlineSync = require("readline-sync");
const util = require("util");
const readFile = util.promisify(fs.readFile);

let fileName = readlineSync.question("Give file name: ");

readFile(fileName, "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

function parseJson(data) {
  function func(resolve, reject) {
    const obj = JSON.parse(data);
    if ("name" in obj) {
      resolve(obj.name);
    } else {
      reject("no name");
    }
  }
  const p = new Promise(func);
  return p;
}
