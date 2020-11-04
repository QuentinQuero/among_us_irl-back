'use strict';

const User = require('../../schema/UserSchema');

const isUsedEmailAddress = function (email) {
    console.log('User services - isUsedEmailAddress - begin: ', email);
    return new Promise((resolve, rejected) => {
        User.findOne({email: email}, function (err, user) {
            if (err || user === null) {
                console.log('User services - isUsedEmailAddress - email not found: ', email);
                resolve(false);
            } else {
                console.log('User services - isUsedEmailAddress - email used')
                resolve(true);
            }
        });
    });
}

module.exports = isUsedEmailAddress;