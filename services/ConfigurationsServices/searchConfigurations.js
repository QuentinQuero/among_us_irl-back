'use strict'

const configurationSchema = require('../../schema/ConfigurationSchema');

const searchConfigurations = function(filter, pagination, sortColumn, sortType) {
    return new Promise((resolve, reject) => {
        console.log('Configurations services - searchConfiguration - begin')
        let totalRow = 0;
        configurationSchema.find(filter).exec(function (err, result) {
            if (err) {
                console.log('Configuration services - searchConfiguration - error');
                reject(err);
            }
            totalRow = result.length;
            configurationSchema.find(filter)
                .limit(parseInt(pagination.rowsRequest))
                .sort([[sortColumn, parseInt(sortType)]])
                .skip(parseInt(pagination.startRow))
                .exec(function (err, result) {
                   if (err) {
                       console.log('Configuration services - searchConfiguration - error');
                       reject(err);
                   } else {
                       console.log('Configuration services - searchConfiguration - end');
                       resolve({
                           totalRow: totalRow,
                           data: result
                       });
                   }
                });
        });
    });
};

module.exports = searchConfigurations;
