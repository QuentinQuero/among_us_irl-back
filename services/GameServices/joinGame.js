'use strict';

const gameSchema = require('../../schema/GameSchema');

const joinGame = function (user, gameAccessCode) {
    console.log('Game service - joinGame - begin');
    return new Promise((resolve, reject) => {
        gameSchema.findOne({accessCode: gameAccessCode}).exec(function (err, game) {
            if (err || game == null) {
                console.log('Game service - joinGame - error');
                reject('Game not found');
            } else {
                game.players.push(user);
                game.save();
                console.log('Game service - joinGame - end');
                resolve('user added to game');
            }
        });
    });
}

module.exports = joinGame;
