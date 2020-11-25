const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("frontend"));
app.use("/login", express.static("frontend/login.html"));
app.use("/rover", express.static("frontend/rover.html"));

app.get("/photo", (req, res) => {
  res.send("Photo");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
