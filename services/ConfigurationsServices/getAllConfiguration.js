'use strict';

const configurationSchema = require('../../schema/ConfigurationSchema');

const getAllConfigurations = function () {
    return new Promise((resolve, reject) => {
        console.log('Configuration service - getAllConfiguration - begin');
        configurationSchema.find({}, function (err, configs) {
           if (err) {
               console.log('Configuration service - getAllConfiguration - error');
               reject(err)
           } else {
               console.log('Configuration service - getAllConfiguration - end');
               resolve(configs);
           }
        });
    });
}

module.exports = getAllConfigurations;
