const multer = require('../middleware/multer-config');
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', multer, userCtrl.upfile);


module.exports = router