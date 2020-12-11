const fetch = require("node-fetch");
const configParams = require("./config.js");

function fetchNasa(req,res,next) {
  const url = "https://api.nasa.gov/planetary/apod/";
  const key = configParams.apikey;
  const fullURL = `${url}?api_key=${key}`;

  return fetch(fullURL)
    .then((nasaRes) => nasaRes.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = fetchNasa;
