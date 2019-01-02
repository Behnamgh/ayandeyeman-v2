//Install express server
const express = require("express");
let mongoose = require("mongoose");
const createApp = require("./create-app");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://test:test1234@ds113935.mlab.com:13935/typescript",
  {
    useNewUrlParser: true
  }
);

// Start the app by listening on the default Heroku port
createApp().listen(process.env.PORT || 8080, () =>
  console.log(`your server is running on port ${process.env.PORT || 8080}`)
);
