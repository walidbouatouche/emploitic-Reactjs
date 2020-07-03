const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const offreRoute = require('./routes/offre')
const userRoute = require('./routes/user')
const privateFile = require('./_helpers/privateFile')
const adminFile = require('./_helpers/admineFile')

app.use(cors())

 
app.use(bodyParser.json()); //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express


app.use('/offre', offreRoute)
app.use('/user', userRoute)

/// acces oly for user that mean user can see his files //
app.get('/pdf/:data', privateFile);

// admin can see all files
app.get('/_pdf/:data', adminFile);

module.exports = app;

