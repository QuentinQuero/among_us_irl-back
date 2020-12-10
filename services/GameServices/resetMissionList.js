'use strict';

const gameSchema = require('../../schema/GameSchema');

const resetMissionList = function (gameId) {
    console.log('Game service - resetMissionList - begin');
    return new Promise((resolve, reject) => {
       gameSchema.findById(gameId).exec((err, game) => {
          if (err || game === null) {
              console.log('Game service - resetMissionList - error');
              reject({
                 status: 'error',
                 message: 'gameNotFound'
              });
          } else {
              game.missions = [];
              game.save();
              console.log('Game service - resetMissionList - end');
              resolve({
                 status: 'success',
                 message: 'game mission list reset'
              });
          }
       });
    });
};

module.exports = resetMissionList;
