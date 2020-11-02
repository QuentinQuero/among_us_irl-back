const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Imposter', 'Undefined', 'Player'],
        default: 'Undefined'
    },
    status: {
        type: String,
        enum: ['dead', 'alive'],
        default: 'alive'
    },
    user: {
        type: Schema.ObjectID,
        ref: 'User'
    }
});
module.exports = new mongoose.model('Player', playerSchema);