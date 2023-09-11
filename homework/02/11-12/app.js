const fs = require("fs");
const process = require("process");

function copy(original, copied) {
  fs.readFile(original, "utf-8", function (err, data) {
    if (err) {
      console.log("error");
    } else {
      console.log(data);
      fs.writeFile(copied, data, (err) => {
        if (err) {
          console.log("error");
        } else {
          console.log("Copy succcessful");
        }
      });
    }
  });
}

copy(process.argv[2], process.argv[3]);
