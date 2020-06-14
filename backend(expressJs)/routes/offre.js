
// for Auth you can add it in all routes
  
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const ISADMIN = require('../_helpers/Isadmin_') // test if admin
const OFFRECNTRL = require('../controllers/offre')
const OFFREVALIDATION = require('../controllers/offre.validation') //validation
// get methods
ROUTER.get('/getoffrebyid/:id', OFFRECNTRL.getOffreById);
ROUTER.get('/getoffrebylimit/:limit', OFFRECNTRL.getOffreByLimit);
ROUTER.get('/getoffrebycat/:catId', OFFRECNTRL.getOffreByCat);
ROUTER.get('/searchoffre/:char', OFFRECNTRL.searchOffre);
ROUTER.get('/getmyoffre/:id', OFFRECNTRL.getMyoffres);
ROUTER.get('/getoffrenumber', OFFRECNTRL.getOffreNumber)

ROUTER.get('/getoffrenumberbycat/:catId', OFFRECNTRL.getNumberOffresByCat)
ROUTER.get('/getOffrebycatwithpagination/:data', OFFRECNTRL.getOffreByCatWithPagination)
// post methods
ROUTER.post('/addoffre', OFFRECNTRL.addOffre)
ROUTER.post('/postuleroffres', AUTH, OFFRECNTRL.postulerOffres)
// delete  methods

/*
* here auth + Admin  i use it only here  .
* you can add it in all routes if you want .
*/

ROUTER.delete('/deleteoffrebyid/:id', AUTH, ISADMIN, OFFREVALIDATION._deleteOffreById, OFFRECNTRL.deleteOffreById)
// put method
ROUTER.put('/updateoffre/', OFFRECNTRL.updateOffre)
module.exports = ROUTER;