'use strict'
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/isEmailUsed', userController.isUsedEmail);

module.exports = router;
