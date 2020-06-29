const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const ISADMIN = require('../_helpers/Isadmin_') // test if admin
const USERCNTRL = require('../controllers/user')
const MULTER = require('../_helpers/multer-config');
// get

ROUTER.get('/getuserbyid/:id', USERCNTRL.getUserById)
ROUTER.get('/getusersbyoffre/:id', USERCNTRL.getUsersByOffre)
//post
ROUTER.post('/signup/', USERCNTRL.signup)
ROUTER.post('/login/', USERCNTRL.login)
ROUTER.post('/sendnewpass/', USERCNTRL.sendNewPass)

//put
ROUTER.put('/updateuser/', USERCNTRL.updateUser)
ROUTER.put('/upcvfile/', AUTH, MULTER, USERCNTRL.upfileCv)

ROUTER.get('/logout/:id', USERCNTRL.logout)

module.exports = ROUTER;