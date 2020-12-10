'use strict';

const gameSchema = require('../../schema/GameSchema');
const gameService = require('./index');

const updateGameStatus = function (gameId) {
    console.log('Game service - updateGameStatus - begin')
    return new Promise((resolve, reject) => {
       gameSchema.findById(gameId).exec((err, game) => {
           if(err || game === null) {
               console.log('Game service - updateGameStatus - error no game found');
               resolve({
                  status: 'error',
                  message: 'No game found'
               });
           } else {
               let newStatus = '';
               switch (game.status) {
                   case 'init':
                       newStatus = 'inGame';
                       break;
                   case 'inGame':
                       newStatus = 'finished';
                       break;
                   case 'finished':
                       newStatus = 'init';
                       gameService.resetMissionList(game._id).then(() => {
                           gameService.resetPlayerList(game._id).then(() => {

                           }).catch(() => {
                              console.log('gameService - updateGameStatus - error resetPlayerList');
                              reject({
                                  status: 'error',
                                  message: 'error_reset_player_list'
                              });
                           });
                       }).catch(() => {
                           console.log('gameService - updateGameStatus - error resetMissionList');
                           reject({
                               status: 'error',
                               message: 'error_reset_mission_list'
                           });
                       })
                       break;
               }
               game.status = newStatus;
               game.save();
               console.log('Game service - updateGameStatus - end');
               resolve({
                  status: 'success',
                  message: 'game status updated'
               });
           }
       })
    });
};

module.exports = updateGameStatus;
