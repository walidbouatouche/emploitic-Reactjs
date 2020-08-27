const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const ISADMIN = require('../_helpers/Isadmin_') // test if admin
const USERCNTRL = require('../controllers/user')
const MULTER = require('../_helpers/multer-config');
const isRecruiter = require('../_helpers/IsR') // test if recruter

// get
ROUTER.get('/getuserbyid/:id', AUTH, USERCNTRL.getUserById)
ROUTER.get('/getusersbyoffre/:id', isRecruiter, USERCNTRL.getUsersByOffre)
ROUTER.get('/cv/', AUTH, USERCNTRL.getCv)
ROUTER.get('/s/', USERCNTRL.sendNewPass)
ROUTER.get('/_cv/:iduser', isRecruiter, USERCNTRL.getCvR)

// if the user postuler  one  offre of rectuirer 
// he have acces to see the profil user
ROUTER.get('/getuserbyr/:iduser', isRecruiter, USERCNTRL.getUserByR)

//post
ROUTER.post('/signup/', USERCNTRL.signup)
ROUTER.post('/login/', USERCNTRL.login)
ROUTER.post('/sendnewpass/', USERCNTRL.sendNewPass)

//put
ROUTER.put('/updateuser/', AUTH, USERCNTRL.updateUser)
ROUTER.put('/upcvfile/', AUTH, MULTER, USERCNTRL.upfileCv)





module.exports = ROUTER;