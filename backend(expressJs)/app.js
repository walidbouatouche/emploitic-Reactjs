const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const OFFREROUTE = require('./routes/offre')
const USERROUTE = require('./routes/user')
const privateFile = require('./_helpers/privateFile')

const adminFile = require('./_helpers/admineFile')

// i use Auth here for  secure files




app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express


app.use('/offre', OFFREROUTE)
app.use('/user', USERROUTE)

/// acces oly for user that mean user can see his files //
app.get('/pdf/:data', privateFile);

// admin can see all files
app.get('/_pdf/:data', adminFile);

module.exports = app;

