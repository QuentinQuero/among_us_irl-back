const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Player'
        }
    ],
    configurations: {
        type: Schema.Types.ObjectID,
        ref: 'Configuration'
    },
    missions: [
        {
            type: Schema.Types.ObjectID,
            ref: 'PlayerMission'
        }
    ],
    accessCode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['init', 'in game', 'finished'],
        default: 'init'
    }
});

const autoPopulateConfiguration = function (next) {
    this.populate('configurations');
    next();
}

const autoPopulatePlayers = function (next) {
    this.populate('players');
    next();
}

GameSchema.
    pre('find', autoPopulateConfiguration).
    pre('findOne', autoPopulateConfiguration);


module.exports = new mongoose.model('Game', GameSchema);
