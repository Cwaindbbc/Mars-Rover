const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("frontend"))

app.get('/photo',(req,res) => {
 res.send("Photo of the day");

}); 

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
