const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');

router.get('/', offreCtrl.getAllOffre);
router.get('/:id', offreCtrl.getOffreByCat);

module.exports = router