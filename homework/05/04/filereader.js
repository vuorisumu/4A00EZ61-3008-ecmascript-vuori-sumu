const fs = require("fs");

function FileReader(path) {
  this.path = path;
  this.readAndOutput = function () {
    fs.readFile(this.path, "utf-8", this.done.bind(this));
  };
  this.done = function (err, data) {
    if (err) {
      throw new Error(err);
    } else {
      console.log(`Path: ${this.path}\nData:\n${data}`);
    }
  };
}

module.exports = FileReader;
