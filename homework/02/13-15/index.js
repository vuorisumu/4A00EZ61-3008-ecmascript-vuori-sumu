const axios = require("axios");
const process = require("process");

function getNames(x = 0) {
  if (isNaN(x)) {
    x = 0;
  }

  let characters = [];
  if (x == 0) {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        for (let i = 0; i < resp.data.results.length; i++) {
          characters.push(resp.data.results[i]);
        }
      })
      .finally(() => {
        const charactersMapped = characters.map(
          (c) => `<li> ${c.name} </li>\n`
        );

        let listToString = "<ul>\n";
        for (let i = 0; i < charactersMapped.length; i++) {
          listToString += charactersMapped[i];
        }
        listToString += "</ul>";

        console.log(listToString);
      });
  } else {
    axios.get("https://swapi.dev/api/people/" + x).then((resp) => {
      console.log(resp.data.name);
    });
  }
}

getNames(process.argv.splice(2));
