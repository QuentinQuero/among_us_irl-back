'use strict';

const configurationService = require('../../services/ConfigurationsServices');

const searchConfigurations = function (req, res, next) {
    console.log('Configuration controller - searchConfiguration - begin');
    let filter = build (req.query.filters);
    configurationService.searchConfigurations(filter, req.query.pagination, req.query.sort.column , req.query.sort.order ).then((response) => {
        console.log('Configuration controller - searchConfiguration - end');
        res.json({
            status: 'success',
            data: response.data,
            totalRow: response.totalRow
        });
    }).catch((error) => {
        console.log('Configuration controller - searchConfiguration - error');
        res.json({
            status: 'error',
            error: error
        });
    });
}

const build = function (queryFilter) {
    let filter = {};

    if (queryFilter !== null || typeof queryFilter !== 'undefined') {
        let filters = JSON.parse(queryFilter);
        // Set configuration filter
        if (typeof filters !== 'undefined' && filters.name !== '') {
            filter.name = new RegExp(filters.name, 'i');
        }

        // Set cooldown filter
        if(typeof filters.cooldown !== 'undefined' && filters.cooldown !== '') {
            filter.cooldown = filters.cooldown;
        }


        if(typeof filters.nbPlayers !== 'undefined' && filters.nbPlayers !== '') {
            filter.nbPlayers = filters.nbPlayers;
        }

        if(typeof filters.nbImposter !== 'undefined' && filters.nbImposter !== '') {
            filter.nbImposter = filters.nbImposter;
        }

        if(typeof filters.nbShortMissions !== 'undefined' && filters.nbShortMissions !== '') {
            filter.nbShortMissions = filters.nbShortMissions;
        }

        if(typeof filters.nbNormalMissions !== 'undefined' && filters.nbNormalMissions !== '') {
            filter.nbNormalMissions = filters.nbNormalMissions;
        }

        if(typeof filters.nbLongMissions !== 'undefined' && filters.nbLongMissions !== '') {
            filter.nbLongMissions = filters.nbLongMissions;
        }
    }

    return filter
}

module.exports = searchConfigurations;
