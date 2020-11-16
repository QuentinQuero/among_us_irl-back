'use strict'

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/GameControllers');
const security = require('../helpers/security');

router.get('/search', security.isAuthenticated, gamesController.searchGames);

module.exports = router;
