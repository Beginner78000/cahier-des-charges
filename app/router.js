const express = require('express');
const mainController = require('./controllers/mainController');


const router = express.Router();

// On appelle la méthode home depuis mainController
router.get(`/`, mainController.home);

module.exports = router;