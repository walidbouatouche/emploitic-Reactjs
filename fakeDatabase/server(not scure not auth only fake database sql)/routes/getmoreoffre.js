const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');

 
router.get('/:limit', offreCtrl.getMoreOffre);

module.exports = router