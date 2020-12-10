'use strict';

const gameSchema = require('../../schema/GameSchema');

const removePlayerFromGame = function (gameId, playerId) {
    console.log('Game service - removePlayerFromGame - begin');
    return new Promise((resolve, reject) => {
       gameSchema.findById(gameId).exec(function(err, game) {
           // Test if game exist
           if (err || game === null) {
               console.log('Game service - removePlayerFromGame - error game not found');
               resolve({
                   status: 'error',
                   message: 'game_not_found'
               });
           } else {
               // Test game status
               if (game.status !== 'init') {
                   console.log('Game service - removePlayerFromGame - error can\'t leave game with this status: ' + game.status);
                   resolve({
                      status: 'error',
                      message: 'wrong_game_status'
                   });
               } else {
                   // Test if player is in the game
                   if (!game.players.includes(playerId)) {
                       console.log('Game service - removePlayerFromGame - error player not found');
                       resolve({
                          status: 'error',
                          message: 'player_not_in_game'
                       });
                   } else {
                       let playerIndex = game.players.indexOf(playerId);
                       game.players.splice(playerIndex, 1);
                       game.save();
                       resolve({
                           status: 'success',
                           message: 'player_removed'
                       });
                   }
               }
           }
        });
    });
};

module.exports = removePlayerFromGame;
