'use strict'

const Configuration = require('../../schema/ConfigurationSchema');

const createConfiguration = function (name, nbPlayers, nbImposter, cooldown, nbShortMissions, nbNormalMissions, nbLongMissions) {
    console.log('Configuration services - create Configuration - begin');
    return new Promise((resolve, reject) => {
       let configuration = new Configuration({
           name: name,
           cooldown: cooldown,
           nbPlayers: nbPlayers,
           nbImposter: nbImposter,
           nbShortMissions: nbShortMissions,
           nbNormalMissions: nbNormalMissions,
           nbLongMissions: nbLongMissions
       });
       configuration.save(function (err, configuration) {
          if (err) {
            console.log('Configuration services - create Configuration - begin');
            reject(err);
          } else {
              console.log('Configuration services - create Configuration - end');
              resolve(configuration);
          }
       });
    });
}

module.exports = createConfiguration;
