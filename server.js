const { animals } = require('./data/animals'); //require data from animals.js file
const express = require('express') //require express
const app = express(); // instantiate the server

//How to add route
app.get('/api/animals', (req, res) => {
    res.json(animals);
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`); // method to make the server "listen"
});
