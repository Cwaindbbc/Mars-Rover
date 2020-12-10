const configParams = require("./config.js");

const key = configParams.apikey;
const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const fetchingFromNasa = require("./fetchingFromNasaApi.js");

app.use(express.static("frontend"));
app.use("/login", express.static("frontend/login.html"));
app.use("/rover", express.static("frontend/rover.html"));

app.post("/login", (req, res) => {
  const hardCodedUser = "user";
  const hardCodedPassword = "me";

  const enteredUsername = req.body.uname;
  const enteredPassword = req.body.psw;
  
  console.log(req.body.uname);

  if (
    enteredUsername === hardCodedUser &&
    enteredPassword === hardCodedPassword
  ) {
    res.send("OK");
  } else {
    res.send("Not a match :-(. Please try again");
  }
});

app.get("/image", fetchingFromNasa);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
