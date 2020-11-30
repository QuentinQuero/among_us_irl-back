'use strict';

const configurationService = require('../../services/ConfigurationsServices');

const createConfiguration = function (req, res, next) {
    console.log('Configuration Controller - createConfiguration - begin');
    configurationService.createConfiguration(req.body.name, req.body.nbPlayers, req.body.nbImposter, req.body.cooldown, req.body.nbShortMissions, req.body.nbNormalMissions, req.body.nbLongMissions).then((response) => {
       console.log('Configuration Controller - createConfiguration - end');
       res.json({
           status: 'success',
           message: 'Configuration created'
       });
    }).catch((error) => {
        console.log('Configuration controller - createConfiguration - error');
        res.json({
           status: 'error',
           message: error
        });
    })
};

module.exports = createConfiguration;
