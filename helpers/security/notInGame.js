'use strict';

const boom = require('@hapi/boom');
const gameSchema = require('../../schema/GameSchema');

const notInGame = function (req, res, next) {
    console.log('Security - notInGame - begin');
    gameSchema.find({
        $or: [
            { status: 'init' },
            { status: 'in game' }
        ]
    }, function (err, games) {
        if (err) {
            console.log(err);
        }
        // case no games or all game terminated
        if (games === null || games.length == 0) {
            next();
        } else {
            // Browse each games
            let found = false;
            let count = 0;
            while (!found && count < games.length) {
                if (games[count].players.includes(req.currentUser._id)) {
                    console.log('Security - notInGame - User is already in game');
                    found = true;
                }
                count ++;
            }
            if (found) {
                console.log('Security - notInGame - end - User is already in game')
                res.json({
                    status: 'error',
                    message: 'User is in game'
                });
            } else {
                console.log('Security - notInGame - end');
                next();
            }
        }

    })

}

module.exports = notInGame;
