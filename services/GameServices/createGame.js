'use strict';

const gameSchema = require('../../schema/GameSchema');

const createGame = function (accessCode, configurationId) {
    console.log('Game Service - createGame - begin');
    return new Promise((resolve, reject) => {
       let game = new gameSchema({
           players: [],
           configurations: configurationId,
           missions: [],
           accessCode: accessCode
       });
       game.save(function (err, game) {
          if (err) {
              console.log('Game services - createGame - error');
              reject(err)
          } else {
              console.log('Game services - createGame - end');
              resolve(game);
          }
       });
    });
}

module.exports = createGame;
