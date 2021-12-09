var express = require('express')
var app = express()
const path = require('path');
const axios = require('axios').default;

const hostname = 'localhost';
const port = 8080;

app.use(express.static(path.join(__dirname + '/public/')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.get("/array", (req, res) => {
    res.sendFile(__dirname + "/public/array.html");
  });

  app.get("/loops", (req, res) => {
    res.sendFile(__dirname + "/public/loops.html");
  });

  app.get("/restful", (req, res) => {
    res.sendFile(__dirname + "/public/restful.html");
  });


app.listen(8080, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("The server is running on port", 8080);
  });