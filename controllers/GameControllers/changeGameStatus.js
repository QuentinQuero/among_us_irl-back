'use strict';

const gameService = require('../../services/GameServices');

const changeGameStatus = function (req, res, next) {
    gameService.updateGameStatus(req.body.gameId).then((response) => {
        res.json({
            status: 'success',
            message: 'game status updated'
        });
    }).catch((error) => {
        res.json({
            status: 'error',
            message: error
        });
    });
};

module.exports = changeGameStatus;
