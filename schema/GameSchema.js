const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [
        {
            type: Schema.Types.ObjectID,
            ref: 'player'
        }
    ],
    cooldown: {
        type: Number,
        required: true,
        default: 45
    },
    nbPlayers: {
        type: Number,
        required: true,
        default: 10
    },
    totalMissions: {
        type: Number,
        required: true,
        default: 15
    },
    nbImposter: {
        type: Number,
        required: true,
        default: 2
    }
});

module.exports = new mongoose.model('game', GameSchema);