const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');


router.get('/:char', offreCtrl.getAllOffre);
 
module.exports = router