'use strict';

const configurationService = require('../../services/ConfigurationsServices');

const getConfigurationForSelect = function (req, res, next) {
    console.log('Configuration Controller - getConfigurationForSelect - begin')
    let optionList = [];
    configurationService.getAllConfiguration().then((configs) => {
        configs.forEach((config) => {
            optionList.push({
                label: config.name,
                id: config._id
            });
        });
        console.log('Configuration Controller - getConfigurationForSelect - end');
        res.json({
            status: 'success',
            data: optionList
        })
    }).catch((err) => {
        console.log('Configuration Controller - getConfigurationForSelect - error');
        res.json({
            status: 'error',
            message: err
        });
    });
};

module.exports = getConfigurationForSelect;
