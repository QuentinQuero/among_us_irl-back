'use strict';

const getUserByEmail = require('./getUserByEmail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const logUser = function (email, password) {
    console.log('User services - logUser - begin');
    return new Promise((resolve, rejected) => {
        getUserByEmail(email)
            .then((user) => {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = jwt.sign({id: user._id}, process.env.secretKey, {expiresIn: '2h'});
                    console.log('User services - logUser - end');
                    resolve({
                        "token": token,
                        "user": user
                    });
                } else {
                    console.error('User services - logUser - error: wrong password');
                    rejected('Wrong password');
                }
            })
            .catch((error) => {
                console.error('User services - logUser - error :', error);
                rejected(error);
            });
    });
};

module.exports = logUser;
