'use strict';

const gameSchema = require('../../schema/GameSchema');

const notInGame = function (req, res, next) {
    console.log('Security - notInGame - begin');
    gameSchema.find({
        $or: [
            { status: 'init' },
            { status: 'inGame' }
        ]
    }).populate('players').exec(function (err, games) {
        if (err) {
            console.log(err);
        }
        // case no games or all game terminated
        if (games === null || games.length === 0) {
            next();
        } else {
            // Browse each games
            let found = false;
            let count = 0;
            while (!found && count < games.length) {
                let countPlayer = 0;
                while (!found && countPlayer < games[count].players.length) {
                    console.log(games[count].players[countPlayer]);
                    if (games[count].players[countPlayer].user.equals(req.currentUser._id)) {
                        console.log('Security - notInGame - User is already in game');
                        found = true;
                    }
                    countPlayer++;
                }
                count ++;
            }
            if (found) {
                console.log('Security - notInGame - end - User is already in game')
                res.json({
                    status: 'error',
                    message: 'already_in_game'
                });
            } else {
                console.log('Security - notInGame - end');
                next();
            }
        }

    });

}

module.exports = notInGame;
