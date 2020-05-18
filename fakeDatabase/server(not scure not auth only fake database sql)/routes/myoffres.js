const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');

router.get('/:id', offreCtrl.getMyoffres);

module.exports = router