const express = require('express');
const router = express.Router();

const offreCtrl = require('../controllers/offre');


router.get('/:id', offreCtrl.getOffreById);
router.delete('/:id', offreCtrl.deleteById);
module.exports = router