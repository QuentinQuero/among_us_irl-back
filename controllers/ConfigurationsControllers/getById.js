'use strict';

const configurationService = require('../../services/ConfigurationsServices');

const getById = function (req, res, next) {
    console.log('Configuration Controller - getById - begin');
    configurationService.getConfigurationById(req.params.id).then((response) => {
        console.log('Configuration Controller - getById - end');
        res.json({
            status: 'success',
            data: response
        })
    }).catch((error) => {
        console.log('Configuration Controller - getById - error');
        res.json({
            status: 'error',
            message: error
        })
    })
}

module.exports = getById;
