'use strict';

const express = require('express');
const router = express.Router();
const configurationController = require('../controllers/ConfigurationsControllers');
const security = require('../helpers/security');

router.get('/search', security.isAuthenticated, configurationController.searchConfigurations);
router.post('/create', security.isAuthenticated, configurationController.createConfiguration);
router.get('/forSelect', security.isAuthenticated, configurationController.getConfigurationForSelect);
router.get('/:id', security.isAuthenticated, configurationController.getById);

module.exports = router;
