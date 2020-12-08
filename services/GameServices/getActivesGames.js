'use strict';

const gameSchema = require('../../schema/GameSchema');

const getActiveGames = function () {
    return new Promise((resolve, reject) => {
        console.log('Game service - getActiveGames - begin');
        gameSchema.find({
            $or: [
                { status: 'init'},
                { status: 'inGame'}
            ]
        }).populate('players').exec(function (err, games) {
            if (err) {
                reject(err);
            }
            if (games === null || games.length === 0) {
                reject ('No actives games');
                console.log('Game service - getActiveGames - end no game found');
            } else {
                console.log('Game service - getActiveGames - end');
                resolve({games: games});
            }
        });
    });
}

module.exports = getActiveGames;
