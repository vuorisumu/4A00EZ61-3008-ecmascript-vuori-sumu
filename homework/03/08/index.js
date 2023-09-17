const readlineSync = require("readline-sync");

while (isNaN(userInput)) {
  var userInput = Number(readlineSync.question("give id: "));
}

fetchTitle(userInput).then((title) =>
  console.log(`First film title: ${title}`)
);

async function fetchTitle(id) {
  const firstFilm = await fetchFirstFilm(id);
  const filmName = await getFilmName(firstFilm);
  return filmName;
}

async function fetchFirstFilm(id) {
  let charId = "https://swapi.dev/api/people/" + id;
  let filmAddress = "";
  await fetch(charId)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(`Name: ${json.name}`);
      filmAddress = json.films[0];
    });
  return filmAddress;
}

async function getFilmName(address) {
  let filmName = "";
  await fetch(address)
    .then((resp) => resp.json())
    .then((json) => {
      filmName = json.title;
    });
  return filmName;
}
