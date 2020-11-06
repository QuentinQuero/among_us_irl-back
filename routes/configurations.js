'use strict';

const express = require('express');
const router = express.Router();
const configurationController = require('../controllers/ConfigurationsControllers');
const security = require('../helpers/security');

router.get('/search', security.isAuthenticated, configurationController.searchConfigurations);

module.exports = router;
