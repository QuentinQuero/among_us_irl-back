const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    pseudo: {
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
        type: Schema.Types.ObjectID,
        ref: 'USer'
    }
});

module.exports = new mongoose.model('Player', playerSchema);
