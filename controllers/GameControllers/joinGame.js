'use strict';

const gameServices = require('../../services/GameServices');

const joinGame = function (req, res, next) {
    console.log('Game controller - joinGame - begin');
    gameServices.joinGame(req.currentUser, req.query.accessCode).then((response) => {
        console.log('Game Controller - joinGame - end');
        res.json({
            status: 'Success',
            message: 'Game joined'
        })
    }).catch(() => {
        res.json({
            status: 'Error',
            message: 'Game not joined'
        })
    });
};

module.exports = joinGame;
