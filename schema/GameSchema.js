const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [
        {
            type: Schema.ObjectID,
            ref: 'Player'
        }
    ],
    configurations: {
        type: Schema.ObjectID,
        ref: 'Configuration'
    },
    missions: [
        {
            type: Schema.ObjectID,
            ref: 'PlayerMission'
        }
    ]
});

module.exports = new mongoose.model('Game', GameSchema);