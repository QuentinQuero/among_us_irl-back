'use strict';

const gameService = require('../../services/GameServices');

const getGameDetails = function (req, res, next) {
    console.log('GameController - getGAmeDetails - begin');
    gameService.getGameDetails(req.params.id).then((game) => {
        res.json({
            status: 'success',
            game: game
        });
    }).catch((error) => {
        res.json({
            status: 'error',
            message: error
        })
    })
};

module.exports = getGameDetails;
