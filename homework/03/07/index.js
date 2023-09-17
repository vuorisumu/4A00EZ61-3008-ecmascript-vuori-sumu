const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function readFileAndParse(fn) {
  const file = await readFile(fn);
  const data = JSON.parse(file);
  return data;
}

let fileName = "package.json";

readFileAndParse(fileName)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
