const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./src/routes/routes');

function createApp() {
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static('public'));
  app.use(express.static(__dirname + '/dist/ayandeyeman-v2'));
  // app.use(morgan('dev'))

  app.use(bodyParser.json());
  app.use('/api', apiRouter());
  app.use('*', (req, res) => {
    return res.sendFile(path.join(__dirname + '/dist/ayandeyeman-v2/index.html'));
  });

  return app;
}

module.exports = createApp;
