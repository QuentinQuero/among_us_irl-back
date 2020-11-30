'use strict';

const gameService = require('../../services/GameServices');

const createGame = function (req, res, next) {
    console.log('Game Controller - createGame - begin');
    gameService.createGames(req.body.gameAccessCode, req.body.configurationId).then((response) => {
       console.log('Game controller - createGame - end');
       res.json({
           status: 'Success',
           message: 'Game created'
       })
    }).catch((error) => {
        console.log('Game controller - createGame - error');
        res.json({
            status: 'Error',
            message: error
        })
    })
};

module.exports = createGame;

