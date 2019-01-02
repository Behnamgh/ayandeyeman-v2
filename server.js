//Install express server
const express = require('express');
const path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let routes = require('./src/routes/crmRoutes');
const createApp = require('./create-app');



const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test1234@ds113935.mlab.com:13935/typescript', {
  useNewUrlParser: true
});

// serving static files


// Start the app by listening on the default Heroku port
createApp().listen(process.env.PORT || 8080, () =>
console.log(`your server is running on port ${process.env.PORT || 8080}`)
);
