const configParams = require("./config.js");

const key = configParams.apikey;
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 3000;
const fetchingFromNasa = require("./fetchingFromNasaApi.js");

app.use(express.static("frontend"));
app.use("/login", express.static("frontend/login.html"));
app.use("/rover", express.static("frontend/rover.html"));

app.get("/image", fetchingFromNasa);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
