const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("frontend"));
app.use(express.static("frontend/login.html"));

app.get("/photo", (req, res) => {
  res.send("Photo");
});

app.get("/rover", (req, res) => {
  res.send(" Rover page");
});

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  0;
});
