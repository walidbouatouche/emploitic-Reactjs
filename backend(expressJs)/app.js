const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const offreRoute = require('./routes/offre')
const userRoute = require('./routes/user')

 app.use(cors())

 
app.use(bodyParser.json()); //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express


app.use('/offre', offreRoute)
app.use('/user', userRoute)



 
module.exports = app;

