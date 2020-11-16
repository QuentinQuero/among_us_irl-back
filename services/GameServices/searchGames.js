'use strict';

const gameSchema = require('../../schema/GameSchema');

const searchGames = function (filter, pagination, sortColumn, sortType) {
    return new Promise((resolve, reject) => {
       console.log('Game services - searchGame - begin');
       let totalRow = 0;
       gameSchema.find(filter).exec(function (err, result) {
          if (err) {
              console.log('Game services - searchGame - error');
              reject(err);
          }
          totalRow = result.length;
          gameSchema.find(filter)
              .limit(parseInt(pagination.rowsRequest))
              .sort([[sortColumn, parseInt(sortType)]])
              .skip(parseInt(pagination.startRow))
              .exec(function (err, result) {
                  if (err) {
                      console.log('Game services - searchGame - error');
                      reject(err);
                  } else {
                      console.log('Game services - searchGame - end');
                      resolve({
                         totalRow: totalRow,
                         data: result
                      });
                  }
              })
        })
    });
};

module.exports = searchGames;
