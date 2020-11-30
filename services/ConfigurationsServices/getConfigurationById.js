'use strict';

const configurationSchema = require('../../schema/ConfigurationSchema');

const getConfigurationById = function (id) {
    console.log('Configuration services - getConfigurationById - begin');
    return new Promise((resolve, reject) => {
        configurationSchema.findById(id, function (err, configuration) {
            if (err || configuration === null) {
                console.log('Configuration services - getConfigurationById - error');
                reject(err);
            } else {
                console.log('Configuration service - getConfigurationById - end');
                resolve(configuration);
            }
        })
    })
}

module.exports = getConfigurationById;
