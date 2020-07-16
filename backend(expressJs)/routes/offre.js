
// for Auth you can add it in all routes

const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const ISADMIN = require('../_helpers/Isadmin_') // test if admin
const OFFRECNTRL = require('../controllers/offre')
const OFFREVALIDATION = require('../_helpers/validation') //validation

const isRecruiter = require('../_helpers/IsR') // test if recruter

// methods of Admin


// methods of Recruiter
ROUTER.get('/searchoffre/:char', isRecruiter, OFFRECNTRL.searchOffre);
ROUTER.delete('/deleteoffrebyid/:id', isRecruiter, OFFRECNTRL.deleteOffreById)
ROUTER.put('/updateoffre/', isRecruiter, OFFRECNTRL.updateOffre)
ROUTER.post('/addoffre', isRecruiter, OFFRECNTRL.addOffre)
ROUTER.get('/getoffrebylimit/:limit', isRecruiter, OFFRECNTRL.getOffreByLimit);
ROUTER.get('/getoffrenumber', isRecruiter, OFFRECNTRL.getOffreNumber)

// methods Users
ROUTER.get('/getoffrebyid/:id', OFFRECNTRL.getOffreById);
ROUTER.get('/getoffrebycat/:catId', OFFRECNTRL.getOffreByCat);
ROUTER.get('/getmyoffre/:id', AUTH, OFFRECNTRL.getMyoffres);
ROUTER.get('/sameoffres/:id', OFFRECNTRL.getOffreSame)
ROUTER.get('/getoffrenumberbycat/:catId', OFFRECNTRL.getNumberOffresByCat)
ROUTER.get('/getOffrebycatwithpagination/:data', OFFRECNTRL.getOffreByCatWithPagination)
ROUTER.post('/postuleroffres', AUTH, OFFRECNTRL.postulerOffres)



module.exports = ROUTER;