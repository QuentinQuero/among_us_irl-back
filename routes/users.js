'use strict'
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');
const security = require('../helpers/security');

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/isEmailUsed', userController.isUsedEmail);
router.get('/isAdmin', security.isAuthenticated, userController.isAdmin);

module.exports = router;
