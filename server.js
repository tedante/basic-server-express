// importing the Express.js module
const express = require('express');

// creating an instance of an Express application
const app = express();

// defining the port number
const port = 3000;

// defining the route for the root of the site
app.get('/', (req, res) => {
  // sending a response, in this case it is a string "Hello world!"
  res.send('Hello World!');
})

// starting the server
app.listen(port, () => {
  // output message in terminal
  console.log(`Server running at http://localhost:${port}`);
});