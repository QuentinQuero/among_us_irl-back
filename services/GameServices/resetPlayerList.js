'use strict';

const gameSchema = require('../../schema/GameSchema');

const resetPlayerList = function (gameId) {
    console.log('Game service - resetPlayerList - begin');
    return new Promise((resolve, reject) => {
       gameSchema.findById(gameId).exec((err, game) => {
          if (err || game === null) {
              console.log('Game service - resetPlayerList - error');
              reject({
                  status: 'error',
                  message: 'game not fount'
              });
          } else {
              game.players = [];
              game.save();
              console.log('Game service - resetPlayerList - end');
              resolve({
                 status: 'success',
                 message: 'player list reset'
              });
          }
       });
    });
}

module.exports = resetPlayerList;
