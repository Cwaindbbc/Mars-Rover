const { response } = require("express");
const fetch = require("node-fetch");
const configParams = require("./config.js");

function fetchNasa() {
  const url = "https://api.nasa.gov/planetary/apod/";
  const key = configParams.apikey;
  const fullURL = `${url}?api_key=${key}`;

  return fetch(fullURL)
    .then((nasaRes) => nasaRes.json())
    .then((data) => data);
}
fetchNasa();

function accessResponse(req, res) {
  fetchNasa().then((data) => res.json(data));
}

module.exports = accessResponse;
