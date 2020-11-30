const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configurationSchema = new Schema({
    name: {
      type: String,
      required: true
    },
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
    nbShortMissions: {
        type: Number,
        required: true,
        default: 2
    },
    nbNormalMissions: {
        type: Number,
        required: true,
        default: 2
    },
    nbLongMissions: {
        type: Number,
        required: true,
        default: 1
    },
    nbImposter: {
        type: Number,
        required: true,
        default: 2
    }
});

module.exports = new mongoose.model('Configuration', configurationSchema);
