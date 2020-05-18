const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const offreRoutes = require('./routes/offre')
const _offreRoutes = require('./routes/_offre')
const userRoutes = require('./routes/user')
const _userRoutes = require('./routes/_user')
const upfile_route = require('./routes/upfile');
const postulerRoutes = require('./routes/postuler');
const getoffresRoutes = require('./routes/myoffres');
const offres_adminRoutes = require('./routes/offre_admin');
const getmoreOffersRoutes = require('./routes/getmoreoffre');
const path = require('path');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api/offre/_data/', _offreRoutes);
app.use('/api/offre/data/', offreRoutes);
app.use('/api/user/data/', userRoutes);
app.use('/api/user/_data/', _userRoutes);
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));
app.use('/api/upfile/', upfile_route);
app.use('/api/offre/postuler/', postulerRoutes);
app.use('/api/offre/getmyoffres/', getoffresRoutes);
app.use('/api/offre/offres_adminRoutes/', offres_adminRoutes);
app.use('/api/offre/getmoreoffres/', getmoreOffersRoutes);
module.exports = app;
