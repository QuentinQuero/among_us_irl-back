'use strict';

const gameSchema = require('../../schema/GameSchema');

const getGameDetails = function (gameId) {
    console.log('Game Service - getGameDetails - begin');
    return new Promise((resolve, reject) => {
       gameSchema.findOne({_id: gameId}).populate('players').exec(function (err, game) {
          if (err) {
              console.log('Game Service - getGameDetails - error');
              reject('Error in game service');
          } else {
              console.log('Game Service - getGameDetails - end');
              resolve(game);
          }
       });
    });
};

module.exports = getGameDetails;
