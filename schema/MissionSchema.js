const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MissionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

module.exports = new mongoose.model('Missions', MissionSchema);