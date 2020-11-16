'use strict';

const gameServices = require('../../services/GameServices');

const searchGames = function (req, res, next) {
    console.log('GameController - searchGame - begin');
    let filter = build(req.query.filters);
    gameServices.searchGames(filter, req.query.pagination, req.query.sort.column, req.query.sort.order).then((response) => {
        console.log('GameController - searchGame - end');
        res.json({
            status: 'success',
            data: response.data,
            totalRow: response.totalRow
        });
    }).catch((error) => {
        console.log('GameController - searchGame - error');
        res.json({
            status: 'error',
            error: error
        });
    });;
};

const build = function (queryFilter) {
    let filter = {};

    return filter;
};

module.exports = searchGames;
