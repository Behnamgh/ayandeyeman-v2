//Install express server
const express = require('express');
let mongoose = require('mongoose');
const createApp = require('./create-app');
const request = require('superagent');
var http = require('http');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://test:test1234@ds113935.mlab.com:13935/typescript',
  {
    useNewUrlParser: true
  }
);
let server = http.createServer(createApp());
// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080, (req, res) => {
  setInterval(() => {
    console.log(server.address());
    request.put(
      `http://${server.address().address}:${server.address().port}/api/services/contact/${server.address().port}`,
      (err, response) => {
        if (err) {
          console.log(err);
          console.log('there is an error for connectiong to original');
        }
        // console.log(response.body);
      }
    );
  }, 1000);
  console.log(`your server is running on port ${process.env.PORT || 8080}`);
});
