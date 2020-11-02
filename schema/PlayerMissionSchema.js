const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerMissionSchema = new Schema({
   player: {
       type: Schema.ObjectID,
       ref: "players"
   },
   mission: {
     type: Schema.ObjectID,
     ref: "missions"
   },
   status: {
       type: String,
       enum: ['done', 'backlog', 'in_progress'],
       default: 'backlog'
   }
});

module.exports = new mongoose.model('PlayerMission', playerMissionSchema);