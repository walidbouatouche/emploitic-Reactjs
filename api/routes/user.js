const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();

const USERCNTRL = require('../controllers/user')
const multer = require('../_helpers/multer-config');
// get

ROUTER.get('/getuserbyid/:id', USERCNTRL.getUserById)

//post
ROUTER.post('/signup/', USERCNTRL.signup)
ROUTER.post('/login/', USERCNTRL.login)


//put
ROUTER.put('/updateuser/', USERCNTRL.updateUser)
ROUTER.put('/upcvfile/', multer, USERCNTRL.upfileCv)


module.exports = ROUTER;