'use strict';

const User = require('../../schema/UserSchema');

const createUser = function (email, password) {
    console.log('User services - createUser - begin')
    return new Promise((resolve, rejected) => {
        let user = new User({
            email: email,
            password: password,
            role: 'user'
        });
        user.save(function (err, user) {
            if (err) {
                console.error('User services - createUser - error: ', err);
                rejected(err)
            }
            console.log('User services - createUser - end')
            resolve(user);
        });
    });
}

module.exports = createUser;