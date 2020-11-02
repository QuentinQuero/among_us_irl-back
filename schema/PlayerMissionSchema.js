const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerMissionSchema = new Schema({
   player: {
       type: Schema.ObjectID,
       ref: "Players"
   },
   mission: {
     type: Schema.ObjectID,
     ref: "Missions"
   },
   status: {
       type: String,
       enum: ['done', 'backlog', 'in_progress'],
       default: 'backlog'
   }
});

module.exports = new mongoose.model('PlayerMission', playerMissionSchema);