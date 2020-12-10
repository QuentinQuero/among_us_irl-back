'use strict';

const playerSchema = require('../../schema/PlayerSchema');

const deletePlayerById = function (playerId) {
    console.log('Player service - deletePlayerById - begin');
    return new Promise((resolve, reject) => {
        playerSchema.findByIdAndDelete(playerId, function (err) {
            if (err) {
                console.log('Player service - deletePlayerById - error');
                resolve({
                    status: 'error',
                    message: err
                });
            } else {
                console.log('Player service - deletePlayerById - end');
                resolve({
                    status: 'success',
                    message: 'player_delete'
                });
            }
        })
    });
};

module.exports = deletePlayerById;
