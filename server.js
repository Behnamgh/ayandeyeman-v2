//Install express server
const express = require('express');
let mongoose = require('mongoose');
const createApp = require('./create-app');
const request = require('superagent');
var http = require('http');
var configs = require('./configs');

mongoose.Promise = global.Promise;
mongoose.connect(
  configs.DB_URL,
  {
    useNewUrlParser: true
  }
);
let server = http.createServer(createApp());
// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080, (req, res) => {
  console.log(`your server is running on port ${process.env.PORT || 8080}`);
});
