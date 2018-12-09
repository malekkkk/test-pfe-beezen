const http = require('http');
const url = require('url');
const express = require('express');
const beezenServer = express();
const path = require('path');
var bodyParser = require("body-parser");
const cors = require("cors");

beezenServer.use(bodyParser.json());
beezenServer.use(bodyParser.urlencoded({ extended: false }));

beezenServer.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Pass to next layer of middleware
    next();
});

const getBooksStore = require('./routes/getBooksStore')
// Getting our books store
beezenServer.use('/getBooksStor', getBooksStore);



const hostname = '127.0.0.1';
const port = 3000;

beezenServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});