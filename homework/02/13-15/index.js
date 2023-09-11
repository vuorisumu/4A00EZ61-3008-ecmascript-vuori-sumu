const axios = require("axios");
const process = require("process");

function getNames(x = 0) {
  // defaults to 0
  if (isNaN(x)) {
    x = 0;
  }

  let characters = [];
  if (x == 0) {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        for (let i = 0; i < resp.data.results.length; i++) {
          let chara = resp.data.results[i];

          // calculates bmi
          chara.bmi =
            chara.mass / ((chara.height / 100) * (chara.height / 100));
          characters.push(chara);
        }
      })
      .finally(() => {
        // sorts by bmi
        characters.sort((a, b) => {
          return a.bmi > b.bmi ? 1 : -1;
        });

        // maps characters
        const charactersMapped = characters.map(
          (c) => `<li> ${c.name} </li>\n`
        );

        // adds all to string
        let listToString = "<ul>\n";
        for (let i = 0; i < charactersMapped.length; i++) {
          listToString += charactersMapped[i];
        }
        listToString += "</ul>";

        console.log(listToString);
      });
  } else {
    // return name if argument was given (e13)
    axios.get("https://swapi.dev/api/people/" + x).then((resp) => {
      console.log(resp.data.name);
    });
  }
}

getNames(process.argv.splice(2));
