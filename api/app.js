const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const OFFREROUTE = require('./routes/offre')
const USERROUTE = require('./routes/user')
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

// acces pullic to all files in pds files
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));
app.use('/offre', OFFREROUTE)
app.use('/user', USERROUTE)
module.exports = app;
