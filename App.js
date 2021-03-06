const configParams = require("./config.js");

const key = configParams.apikey;
const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const fetchingFromNasa = require("./fetchingFromNasaApi.js");
const db = require("./repository.js");

app.use(express.static("frontend"));
app.use("/login", express.static("frontend/login.html"));
app.use("/register", express.static("frontend/register.html"));
app.use("/rover", express.static ("frontend/rover.html")); 

app.post("/login", (req, res) => {
  const hardCodedUser = "user";
  const hardCodedPassword = "Me202020";

  const enteredUsername = req.body.uname;
  const enteredPassword = req.body.psw;

  if (
    enteredUsername === hardCodedUser &&
    enteredPassword === hardCodedPassword
  ) {
    res.redirect("/");
  } else {
    res.send("Not a match :-(. Please try again");
  }
});

app.post("/register", function (req, res) {
  const enteredUsername = req.body.uname;
  const enteredPassword = req.body.psw;
  const enteredEmail = req.body.emailAddress;

  db.any(
    `INSERT INTO userstable(
    username,
    email,
    password)
    VALUES 
    ('${enteredUsername}','${enteredEmail}','${enteredPassword}')`
  )

    .then(function () {
      res.status(201).send("Your details have been added to the database");
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/image", fetchingFromNasa);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
