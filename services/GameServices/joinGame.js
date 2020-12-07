'use strict';

const gameSchema = require('../../schema/GameSchema');
const playerService = require('../PlayerServices');

const joinGame = function (pseudo, user, gameAccessCode) {
    console.log('Game service - joinGame - begin');
    return new Promise((resolve, reject) => {
        gameSchema.findOne({accessCode: gameAccessCode}).exec(function (err, game) {
            if (err || game == null) {
                console.log('Game service - joinGame - error');
                reject('Game not found');
            } else {
                if (game.status !== 'init') {
                    reject('Game unavailable');
                } else {
                    if (game.players.length === game.configurations.nbPlayers) {
                        reject('Game full');
                    } else {
                        playerService.createPlayer(pseudo, user).then((player) => {
                            game.players.push(player);
                            game.save();
                            console.log('GameService -joinGame -end');
                            resolve('User added to game');
                        }).catch((error) => {
                           console.log('Game service - join - error');
                           resolve('Error in player creation');
                        });
                    }
                }
            }
        });
    });
}

module.exports = joinGame;
