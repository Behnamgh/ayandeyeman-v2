//Install express server
const express = require('express');
const path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let routes = require('./src/routes/crmRoutes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test1234@ds113935.mlab.com:13935/typescript', {
  useNewUrlParser: true
});


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));
app.use(express.static(__dirname + '/dist/ayandeyeman-v2'));

app.get('/data', (req, res) => {
  res.json({
    name: 'behnam'
  });
});
app.get('/*', (req, res)=> {
  res.sendFile(path.join(__dirname + '/dist/ayandeyeman-v2/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>
console.log(`your server is running on port ${process.env.PORT || 8080}`)
);
