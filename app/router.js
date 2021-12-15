const express = require('express');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const router = express.Router();

// On appelle la méthode home depuis mainController
router.get(`/`, mainController.home);

router.get('/promos', promoController.list);
router.get('/promo/:id', promoController.details);

module.exports = router;