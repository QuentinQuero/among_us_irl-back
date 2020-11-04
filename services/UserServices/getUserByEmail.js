'use strict';

const User = require('../../schema/UserSchema');

const getUserByEmail = function (email) {
    console.log('User services -  getUserByMail - begin :', email);
    return new Promise((resolve, rejected) => {
       User.findOne({email: email}, function (err, user) {
          if (err || user === null) {
              console.error('User services - getUserByMail - error, user not found: ', email);
              rejected('User Not found');
          } else {
              console.log('User services - getUserByMail - end')
              resolve(user);
          }
       });
    });
}

module.exports = getUserByEmail;