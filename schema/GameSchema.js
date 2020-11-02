const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [
        {
            type: Schema.ObjectID,
            ref: 'player'
        }
    ],
    configurations: {
        type: Schema.ObjectID,
        ref: 'configuration'
    },
    missions: [
        {
            type: Schema.ObjectID,
            ref: 'playerMission'
        }
    ]
});

module.exports = new mongoose.model('game', GameSchema);