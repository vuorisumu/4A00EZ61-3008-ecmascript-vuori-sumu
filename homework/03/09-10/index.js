
const process = require("process");
let args = process.argv.slice(2);

// defaults to just 1 if something goes wrong
for(let i in args) {
  if(isNaN(args[i])) {
    args = [1];
    break;
  }
}

fetchAll(args).then((titles) => console.log(titles));
// fetchAllTitles(1).then((titles) => console.log(titles))

async function fetchAll(charIds) {
  if(Array.isArray(charIds)) {
    // makes a promise array out or urls defined by given ids
    const requests = charIds.map((id) => {
      const url = `https://swapi.dev/api/people/${id}`;
      return fetchAllTitles(url); 
    })
    return await Promise.all(requests); // does all promises with the urls
  } else {
    return fetchAllTitles(`https://swapi.dev/api/people/${charIds}`);
  }
}

async function fetchAllTitles(url) {
  // gathers the name and all movie titles
  const info = await fetch(url)
    .then((resp) => resp.json())
    .then(async (json) => {
      // transforms the url array to movie title array
      const filmNames = await Promise.all(json.films.map(getFilmName));
      return {
        name: json.name,
        movies: filmNames
      }
    });
  return info;
}

async function getFilmName(url) {
  let filmName = "";
  // finds the film name with the given url
  await fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      filmName = json.title;
    });
  return filmName;
}
