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
    }
});

module.exports = new mongoose.model('Game', GameSchema);
