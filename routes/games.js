'use strict'

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/GameControllers');
const security = require('../helpers/security');

router.get('/search', security.isAuthenticated, gamesController.searchGames);
router.post('/create', security.isAuthenticated, gamesController.createGame);
router.get('/join', security.isAuthenticated, security.notInGame, gamesController.joinGame);
router.get('/leave', security.isAuthenticated, gamesController.leaveGame);
router.get('/get/:id', security.isAuthenticated, gamesController.getGameDetails);

module.exports = router;
