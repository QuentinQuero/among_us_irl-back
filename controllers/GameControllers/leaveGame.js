'use strict';

const gameService = require('../../services/GameServices');
const playerService = require('../../services/PlayerServices');

const leaveGame = function (req, res, next) {
    console.log('Game controller - leaveGame - begin');
    gameService.removePlayerFromGame(req.query.gameId, req.query.playerId).then((response) => {
        if (response.status === 'success') {
            playerService.deletePlayerById(req.query.playerId).then((response) => {
                if (response.status === 'success') {
                    console.log('Game controller - leaveGame - end');
                    res.json({
                        status: 'success',
                        message: 'leave_game_successfull'
                    })
                } else {
                    console.log('Game controller - leaveGame - error');
                    res.json({
                        status: 'error',
                        message: response.message
                    })
               }
            });
        } else {
            console.log('Game controller - leaveGame - error ' + response.message);
            res.json({
                status: 'error',
                message: response.message
            });
        }
    });
};

module.exports = leaveGame;
