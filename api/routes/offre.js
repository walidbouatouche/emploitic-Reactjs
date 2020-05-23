const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();

const OFFRECNTRL = require('../controllers/offre')
// get methods
ROUTER.get('/getoffrebyid/:id', OFFRECNTRL.getOffreById);
ROUTER.get('/getoffrebylimit/:limit', OFFRECNTRL.getOffreByLimit);
ROUTER.get('/getoffrebycat/:catId', OFFRECNTRL.getOffreByCat);
ROUTER.get('/searchoffre/:char', OFFRECNTRL.searchOffre);
ROUTER.get('/getmyoffre/:id', OFFRECNTRL.getMyoffres);
// post methods
ROUTER.post('/addoffre', OFFRECNTRL.addOffre)
ROUTER.post('/postuleroffres', OFFRECNTRL.postulerOffres)
// delete  methods
ROUTER.delete('/deleteoffrebyid/:id', OFFRECNTRL.deleteOffreById)

// put method
ROUTER.put('/updateoffre/', OFFRECNTRL.updateOffre)
module.exports = ROUTER;