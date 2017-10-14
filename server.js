const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
const keys = require('./config/keys');

app.set('port', (process.env.PORT || 3001));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(keys.mongoURI);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

require('./routes/itemRoutes')(app);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3001!')
})