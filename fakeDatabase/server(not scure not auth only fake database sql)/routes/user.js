const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', userCtrl.signup);
router.get('/:mail', userCtrl.getUserById);
module.exports = router