'use strict';

const gameService = require('../../services/GameServices');

const getUserPlayerAndActiveGame = function (req, res, next) {
    console.log('User controller - getUserPlayerAndActiveGame - begin');
    gameService.getActiveGames().then((response) => {
        let count = 0;
        let found = false;
        while (count < response.games.length && !found) {
            let game = response.games[count];
            let countGamePlayer = 0;
            while (!found && countGamePlayer < game.players.length) {
                if(game.players[countGamePlayer].user.equals(req.currentUser._id)) {
                    found = true;
                    console.log('User controller - getUserPlayerAndActiveGame - end');
                    res.json({
                        status: 'Game founded',
                        game: game,
                        player: game.players[countGamePlayer]
                    });
                }
                countGamePlayer ++;
            }
            count ++;
        }
        if(!found) {
            console.log('User controller - getUserPlayerAndActiveGame - end no game founded');
            res.json({
                status: 'No game founded'
            })
        }
    }).catch((error) => {
        console.log('User controller - getUserPlayerAndActiveGame - error');
        console.log(error)
        res.json({
            status: 'error'
        })
    });
}

module.exports = getUserPlayerAndActiveGame;
