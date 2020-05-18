const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');

router.post('/', offreCtrl.postuleroffres);

module.exports = router