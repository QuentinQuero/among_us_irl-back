'use strict';

const playerSchema = require('../../schema/PlayerSchema')

const createPlayer = function (pseudo, user) {
    console.log('Player service - createPlayer - begin');
    return new Promise((resolve, reject) => {
        let player = new playerSchema({
            pseudo: pseudo,
            user: user
        });
        player.save(function (err, player) {
           if (err) {
               console.log('Player services - createPlayer - error');
               reject(err);
           } else {
               console.log('Player services - createPlayer - end');
               resolve(player);
           }
        });
    });
}

module.exports = createPlayer;
