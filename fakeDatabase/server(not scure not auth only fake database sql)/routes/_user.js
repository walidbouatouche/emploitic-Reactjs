const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', userCtrl.login);
router.put('/', userCtrl.updateUser)
module.exports = router